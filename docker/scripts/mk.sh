#!/bin/bash
die() {
  local _ret=$2
  test -n "$_ret" || _ret=1
  test "$_PRINT_HELP" = yes && print_help >&2
  echo "$1" >&2
  exit ${_ret}
}

begins_with_short_option() {
  local first_option all_short_options='pcrbfh'
  first_option="${1:0:1}"
  test "$all_short_options" = "${all_short_options/$first_option/}" && return 1 || return 0
}

_arg_pull=
_arg_push=
_arg_restart=
_arg_build="off"
_rootdir="/var/www/mkreg.dev"

print_help() {
  printf '%s\n' "The general script's help msg"
  printf 'Usage: %s [-p|--pull <arg>] [-c|--clear <arg>] [-r|--restart <arg>] [-b|--(no-)build] [-f|--(no-)files] [-h|--help]\n' "$0"
  printf '\t%s\n' "-p, --pull: Pulls and checkout to a specified branch for  mkreg.dev repository e.g: mk -p v1.0  (no default)"
  printf '\t%s\n' "--push: Push to the  main branch at mkreg.dev repositoy with commit message e.g: mk --push 'new update'  (no default)"
  printf '\t%s\n' "-r, --restart: Restart the specified docker container e.g: mk -r mk-server (no default)"
  printf '\t%s\n' "-b, --build, --no-build: Builds and start all docker containers e.g: mk --build (off by default)"
  printf '\t%s\n' "-h, --help: Prints help"
}

parse_commandline() {
  while test $# -gt 0; do
    _key="$1"
    case "$_key" in
    -p | --pull)
      test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
      _arg_pull="$2"
      shift
      ;;
    --pull=*)
      _arg_pull="${_key##--pull=}"
      ;;
    -p*)
      _arg_pull="${_key##-p}"
      ;;
    --push)
      test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
      _arg_push="$2"
      shift
      ;;
    -r | --restart)
      test $# -lt 2 && die "Missing value for the optional argument '$_key'." 1
      _arg_restart="$2"
      shift
      ;;
    --restart=*)
      _arg_restart="${_key##--restart=}"
      ;;
    -r*)
      _arg_restart="${_key##-r}"
      ;;
    -b | --no-build | --build)
      _arg_build="on"
      test "${1:0:5}" = "--no-" && _arg_build="off"
      ;;
    -b*)
      _arg_build="on"
      _next="${_key##-b}"
      if test -n "$_next" -a "$_next" != "$_key"; then
        { begins_with_short_option "$_next" && shift && set -- "-d" "-${_next}" "$@"; } || die "The short option '$_key' can't be decomposed to ${_key:0:2} and -${_key:2}, because ${_key:0:2} doesn't accept value and '-${_key:2:1}' doesn't correspond to a short option."
      fi
      ;;
    -h | --help)
      print_help
      exit 0
      ;;
    -h*)
      print_help
      exit 0
      ;;
    *)
      _PRINT_HELP=yes die "FATAL ERROR: Got an unexpected argument '$1'" 1
      ;;
    esac
    shift
  done
}

parse_commandline "$@"

if [[ $_arg_pull ]]; then
  echo "Pulling in latest changes from $_arg_pull branch..."
  cd $_rootdir
  echo "Pulling ..."
  git fetch -v
  git pull origin $_arg_pull
fi

if [[ $_arg_push ]]; then
  echo "Pushing changes to main branch with msg: $_arg_push"
  cd $_rootdir
  git add .
  git commit -a -m "$_arg_push"
  git push origin HEAD:main
fi

if [[ $_arg_build == "on" ]]; then
  echo "Building docker......"
  cd $_rootdir/docker
  docker-compose up --pull mk-next
  docker-compose up --build -d
  echo "Docker build completed"
  docker-compose ps
fi

if [[ $_arg_restart ]]; then
  echo "Restarting container $_arg_restart......"
  cd $_rootdir/docker
  docker-compose restart $_arg_restart
  echo "$_arg_restart container has been restarted"
  docker-compose ps
fi

echo "----------------------------------------------"
echo "Script completed..."
