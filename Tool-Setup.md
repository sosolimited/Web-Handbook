---
title: Tool Setup
layout: default
---

> **Contents**
> [ZSH within Terminal](#zsh-within-terminal)
> [Homebrew](#homebrew)
> [Sublime Text](#sublime-text)
> [Vagrant](#vagrant)

# ZSH within Terminal

Personally I love Oh My Zsh as my shell. It does really cool stuff like tell you if you’re in a git repo, what the branch is and its status.

> <a href="https://github.com/robbyrussell/oh-my-zsh" target="_blank">Oh My ZSH</a>
> ![TOOL](images/links/tag_tool.png)
> Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

Install it within Terminal with the following line:
```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

You can add all kinds of themes. I think the default is pretty solid.

Download the <a href="http://ethanschoonover.com/solarized" target="_blank">Solarized</a> color space. Solarized is a sixteen color palette (eight monotones, eight accent colors) designed for use with terminal and gui applications.

> <a href="https://github.com/tomislav/osx-terminal.app-colors-solarized" target="_blank">Solarized on Github</a>
> ![TOOL](images/links/tag_tool.png)
> Download the Solarized color space files from github and import them (⌘O) within Terminal. Then using the preferences you can set new tabs and new windows to open with that setting.

# Homebrew

Brew is our system-wide package manager of choice. Great for adding packages to your system at the top level. It tracks everything and makes it easy to upgrade.

> <a href="http://brew.sh/" target="_blank">Homebrew</a>
> ![TOOL](images/links/tag_tool.png)
> Package Manager. Allows to install, remove and updated applications and packages. Full documentation is available <a href="https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme" target="_blank">here</a>.

Install through the command line with the following:
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Always start by updating brew’s directory of formulae:
```
$ brew update
```

Occasionally this command fail sometimes because of a bug. If that ever happens, run the following (when you have Git installed):
```
$ cd /usr/local/Library && git stash && git clean -d -f
```
Typically brew will tell you the above command.

To install a package (or Formula in Homebrew vocabulary) simply type:
```
$ brew install <formula>
```

To see if any of your packages need to be updated:
```
$ brew outdated
```

To update a package:
```
$ brew upgrade <formula>
```

To see what you have installed (with their version numbers):
```
$ brew list --versions
```

Homebrew keeps older versions of packages installed, in case you want to roll back. That rarely is necessary, so you can do some cleanup to get rid of those old versions:
```
$ brew cleanup
```
> <a href="http://sourabhbajaj.com/mac-setup/Homebrew/Usage.html" target="_blank"> Using Homebrew: Mac OS X Setup Guide</a>
> ![REFERENCE](images/links/tag_reference.png)
> Usage is summarized really nicely here - a pretty helpful guide for dev environment setup.

### Homebrew Cask

> <a href="http://caskroom.io/" target="_blank">Homebrew Cask</a>
> ![TOOL](images/links/tag_tool.png)
> Homebrew Cask allows you to use brew for the installation of GUI Mac applications. You can even install sublime with cask. Apps are kept in their Caskroom under /opt and symlinked to your ~/Applications folder.

Initial setup
```
$ brew tap caskroom/cask
$ brew install brew-cask
$ brew update && brew upgrade brew-cask && brew cleanup
```

Example install of Google Chrome
```
$ brew cask install google-chrome
```

Basic usage is summarized <a href="https://github.com/caskroom/homebrew-cask/blob/master/USAGE.md" target="_blank">here</a>.

# Sublime Text

> <a href="http://www.sublimetext.com/" target="_blank">Sublime Text</a>
> ![TOOL](images/links/tag_tool.png)
> Sublime Text is a sophisticated text editor for code, markup and prose.

Can be downloaded or installed with brew cask.
```
$ brew cask install sublime-text3
```

### License

```
----- BEGIN LICENSE -----
Sosolimited
Single User License
EA7E-860681
55523C0B 9E24B191 69399AEA D6E7F90B
784D0ABE 7DBBABDC 31B8C9E5 7FC104AE
7BAA5546 6D6D085A 4DBBAB2F 4B69B0C6
C3570E47 7731D012 75410EA2 AD7B1FB8
32332153 7074A962 B1F4B65F F6255840
28156542 79BA1022 AE6AF889 236D59FC
1C7924DC AD601AE1 3A39BE9A D9F9DD03
5568D1EB 0491568F 3C855C64 37B9D3EE
------ END LICENSE ------
```

### Notes and Tricks

Set tabs to two spaces.
Open up Preferences > Settings – User
Insert the following JSON
```
{
"tab_size": 2,
"translate_tabs_to_spaces": false
}
```

Converting between tabs and spaces can be found in View > Indentation

Start by installing <a href="https://packagecontrol.io/installation" target="_blank">Package Control</a>, which allows you to add and remove packages from the command palette within Sublime.

Maybe install the solarized color palette to increase readability
* Bring up the command palette with ⇧⌘P
* Type “Install Package”
* Search for “Solarized Toggle”
* Once installed, toggle between light and dark with F12 key

**Command Palette**
⇧⌘P
Super useful for installing packages, setting the syntax highlighting, and other tricks

**Multiple Selections**
⌘D
Highlight a region of text and use ⌘D to select the next instance of it. You can continue to do this as much as you like. Once everything is highlighted, you edit in one place and all are changed. Great for renaming variables.

### Launch Sublime from the Command Line

You’ll need to create a symlink for the application
```
$ ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

Now you can launch Sublime with the command
```
$ subl file.txt
```

Key thing to note here is that applications managed by brew are contained in `/usr/local/bin/`.

# Vagrant

Vagrant is a tool for working on projects within a virtual machine. Instead of looking to your system for dependencies and configurations, you’ll work within a virtualized Unix environment. This makes it incredibly easy for all of us to work in identical environments and it makes deployment a breeze.

> <a href="https://www.vagrantup.com/" target="_blank">Vagrant</a>
> ![TOOL](images/links/tag_tool.png)
> Vagrant is a tool for building complete development environments.

Other members of your team create their development environments from the same configuration, so whether you're working on Linux, Mac OS X, or Windows, all your team members are running code in the same environment, against the same dependencies, all configured the same way.

_Insert Soso Case Study (how it’s used on the site)_

Vagrant uses <a href="https://www.virtualbox.org/" target="_blank">Virtualbox</a> to manage the virtual dependencies. Let’s install virtualbox and Vagrant through Brew Cask:
```
$ brew cask install virtualbox
```

Now install Vagrant through cask:
```
$ brew cask install vagrant
```

<a href="http://vagrantmanager.com/" target="_blank">Vagrant-Manager</a> helps you manage all your virtual machines in one place directly from the menu bar.
```
$ brew cask install vagrant-manager
```

Vagrant can also provision on top of AWS.

### Project Setup:

Create a project root directory:
```
$ mkdir vagrant-setup
$ cd vagrant-setup
```

Initialize the Vagrant
```
$ vagrant init
```

This creates a Vagrantfile where you can edit the type of machine and how to configure and provision it. The Vagrantfile should be committed to git for version control.

First you download a box (virtual machine), so that you have a disk image to clone
```
$ vagrant box add hashicorp/precise32
```

Open and edit the Vagrantfile to use this box. If this line were added to the Vagrantfile before you added the box, you would automatically add it as part of the next step (vagrant up).
```
config.vm.box = "hashicorp/precise32"
```

More boxes can be found at <a href="https://atlas.hashicorp.com/boxes/search" target="_blank">HashiCorp’s Atlas box catalog</a>

Now you can boot the box, using the Vagrantfile to provision it
```
$ vagrant up
```

To interact with it, you ssh in, as if it were a remote server/linode.
```
$ vagrant ssh
```

Your project root folder (containing the Vagrantfile) is synced to the virtual machine and can be accessed in ssh at /vagrant. This allows you to edit the files from outside the virtual machine, using things like Sublime. It also allows you to use the finder to move files in and out of the directory. You only need to ssh in to run code.

### Provisioners and Shell Scripts:

Provisioners in Vagrant allow you to automatically install software, alter configurations, and more on the machine as part of the `vagrant up` process. We’ll start with basic shell scripts.

`vagrant up` will provision a machine the first time it creates the environment, but not when it boots, unless the `--provision` flag is provided.

`vagrant provision` will explicitly provision a running environment.

Shell provisioner takes either inline args or a path to a shell script. It can be a remote script like a gist.

You’ll want the following line in your Vagrantfile:
```
config.vm.provision "shell", path: "bootstrap.sh"
```

So now your Vagrantfile specifies both a box and a script:
```
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise32"
  config.vm.provision "shell", path: "bootstrap.sh"
end
```

If you use a remote script as part of your provisioning process, you can pass in its URL as the path argument as well

Let’s start with a script that installs apache. Save the following as `‘bootstrap.sh’: #!/usr/bin/env bash`

```
apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi
```

_Note: We should add a small section here that details a few of the basic things you’ll need to know about setting up a linux machine. Things like:_
* _Apache vs. Nginx (we should have a brief description of how to set up each)_
* _Folder structure and where to put your code_
* _Location of key config files_
* _How to use apt-get, and how it’s similar and different from brew_
_Colin will actually develop a provisioning section that is explained in the deployment portion of code camp. See the main Code Camp doc for an outline._

### Port Forwarding

Port forwarding allows you to specify ports on the guest machine to share via a port on the host machine. This allows you to access a port on your own machine, but actually have all the network traffic forwarded to a specific port on the guest machine.

Add the following to your Vagrantfile:
```
config.vm.network :forwarded_port, host: 8080, guest: 80
```

Now if you load the following URL in a browser, you can see the contents of the vagrant
http://127.0.0.1:8080

You can also specify a fixed IP for the vagrant.

### Synced Folders

You can specify the synced folder in your Vagrantfile with:
```
config.vm.synced_folder "src/", "/srv/website"
```

The first parameter is a path to a directory on the host machine. If the path is relative, it is relative to the project root. The second parameter must be an absolute path of where to share the folder within the guest machine. This folder will be created (recursively, if it must) if it doesn't exist.

### Teardown

Suspend the virtual machine (similar to sleep). This still eats up some disk space, but the reboot process is faster.
```
$ vagrant suspend
```

Shut down the virtual machine. Takes longer to reboot, but is a cleaner shutdown.
```
$ vagrant halt
```

Destroy the virtual machine
```
$ vagrant destroy
```

### Providers

With some additional config, you can build a <a href="https://github.com/mitchellh/vagrant-aws" target="_blank">vagrant AWS instance</a>. If we decide we want to do more deployment using AWS, this would be a good idea. We should probably get comfortable with the basics first.

### Workflow

Now that we’ve covered the basics of Vagrant, we should use it for all web projects. It will dramatically simplify team development and speed up deployment. It also packages your project with all related dependencies, which is great for backup and preservation.

* Start with a simple Vagrant
* Ssh in to test setup and config.
* Add your changes to the bootstrap.sh script. Or if you feel comfortable using provisioning, you can edit the script directly and avoid the above step.
* Try vagrant destroy followed by vagrant up and see if you’ve captured everything.