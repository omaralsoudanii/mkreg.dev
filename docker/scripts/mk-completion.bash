#/usr/bin/env bash
_mk_completions() {
  local cur prev opts base
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD - 1]}"
  all_long_opts="--pull --restart --build --help "
  all_short_opts="-p -r -b -h "
  all_pull_opts="main"
  all_restart_opts="mk-nginx mk-next mk-ghost"
  case "$prev" in
  --pull | -p)
    COMPREPLY=($(compgen -W "${all_pull_opts}" -- "${cur}"))
    return 0
    ;;
  --restart | -r)
    COMPREPLY=($(compgen -W "${all_restart_opts}" -- "${cur}"))
    return 0
    ;;
  *)
    case "$cur" in
    --*)
      COMPREPLY=($(compgen -W "${all_long_opts}" -- "${cur}"))
      return 0
      ;;
    -*)
      COMPREPLY=($(compgen -W "${all_short_opts}" -- "${cur}"))
      return 0
      ;;
    *)
      COMPREPLY=($(compgen -o bashdefault -o default -- "${cur}"))
      return 0
      ;;
    esac
    ;;
  esac

}
complete -F _mk_completions mk

