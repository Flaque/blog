---
path: "/command-line-tools"
date: "2018-02-26T04:41:53+00:00"
title: "Make your command line better"
---

The following is a list of bash command line tools that might make your life easier. They should all be mac/Linux interoperable. 

## autojump

Autojump is a replacement for `cd` that remembers where you've been in the past and can automagically find the path to something you're looking for.

For example, let's say you want to go to `~/projects/node/blog`, if you've been there before, you can just use `j blog` and it will find it.

Install it with
```
# Ubuntu 
sudo apt-get install autojump
```

or 

```
# mac
brew install autojump
```

and then follow the after-install instructions.

## trash-cli

`rm` is quite dangerous. Unlike `rm`, [trash-cli](https://github.com/sindresorhus/trash-cli) will simply move a file to the trash instead.

If you have node, you can install it with npm:

```
$ npm install -g trash-cli
```

Then, you can use it just like `rm`: 

```
trash mything.png
```

In your `.bashrc` or `.zshrc`, you can alias it to switch over without any hassle.

```
alias rm=trash
```

## fkill

`fkill` is an interactive murderer for the command line. Running fkill will launch an auto-completing search for processes on your computer.

![fkill-cli example](https://raw.githubusercontent.com/sindresorhus/fkill-cli/master/screenshot.gif)

You can install it with npm:

```
$ npm install -g fkill-cli
```

It also lets you kill processes by port number, which is really useful when you're getting a "that port is already in use" error and you're not sure why.


