## Script helper for building docker , restarting etc... ##

This script assumes your app is in /var/www/mkreg.dev (Yeah i could've made it env var but am too lazy).
Obviously you wanna change that, 
simply edit mk.sh the `_rootdir` variable declartion in the file **mk.sh**

```sh
_rootdir="/var/www/mkreg.dev"
```

to your app root directory (where you cloned the repo)

```sh
_rootdir="/usr/local/myapp"
```

- Copy `mk.sh` and `mk-completion` to $HOME (this is optional you can keep the shell script within the repo directory, however I prefer to keep excutable in $HOME. You could also symlink it)

- Give permission to the shell script

```sh
sudo chmod +x mk.sh
```

- Install it on your system

```sh
sudo install mk.sh /usr/bin
```

- Add to your `.profile` or `.bashrc` the following line for commands auto completion (notice the directory location, and adjust based on what I mentioned above)
   
```sh
source "$HOME/mk-completion.bash"
```

- Reload shell session and test the script

```sh
bash
mk --help
```

- This should show the help menu and available commands, also test the auto completion


## Tweaking

- If you want to edit what the script does, you need to know bash scripting then just see any command
in `mk.sh` and follow the convention

- If you want to modify auto completion, see `mk-completion.bash` It's pretty much self explanatory
