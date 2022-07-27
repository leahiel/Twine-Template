## Detailed Installation Instructions
I wouldn't have made this repository public if it was super simple for aspiring writers to set up this workflow. So here are some detailed instructions.

### Twine 2 Installation
Twine is an open-source tool for telling interactive, nonlinear stories. You can visit their website at [Twinery.org](https://twinery.org/) and follow the installation instructions there. 

You can find the Twine Cookbook (containing documentation, tips, and examples) at https://twinery.org/cookbook/.

### Tweego Installation
Tweego is a CLI (Command Line Interface) for Twine. You write your passages in plain text files using [Twee Notation](https://www.motoslave.net/tweego/docs/#twee-notation) across as few or as many files as you choose, which makes working and collaborating on Twine projects faster and simpler. And since you're just working on individual files, you can open them on your IDE (Integrated Development Environment) of choice, and a few IDE's give Twee syntax help.

You can download Tweego 2 at [Motoslave.net](https://www.motoslave.net/tweego/). Keep the location of your download in mind! You'll need it to properly install your story format later.

The [documentation for Tweego](https://www.motoslave.net/tweego/docs/) is found there as well.

You may find it helpful to add the directory containing Tweego to your PATH. This will let you use the programing in your CLI easily. Compare: `tweego -o release.html src` with `C:\Users\Username\Desktop\tweego.exe -o release.html src`. Windows users can set their PATH variable either temporarily or permanently [by following the instructions found on Stack Overflow here](https://stackoverflow.com/a/69383805).

To ensure that you've installed Tweego correctly, you can type the following into your CLI:
```
tweego -v
```
This will return the version information of Tweego:
```
tweego, version 2.1.1+81d1d71 (2020-02-25T07:09:26Z) [windows/amd64]

Tweego (a Twee compiler in Go) [http://www.motoslave.net/tweego/]
Copyright (c) 2014-2020 Thomas Michael Edwards. All rights reserved.
```
If you get a substantially different message, then something has gone wrong in your installation.

### Download SugarCube
SugarCube is a free story format for Twine. A story format is requried, and SugarCube is a popular choice. If you're not using Tweego, Twine 2 actually comes with a version of SugarCube by default! However, this repository is built around using Tweego, so a story format is required if you wish to follow along. 

You can download a zip file containing it at [Mostoslave.net](https://www.motoslave.net/sugarcube/2/). The [documentation for SugarCube](https://www.motoslave.net/sugarcube/2/docs/) is found there as well. 

SugarCube's source code is pubically hosted on GitHub. You can find it [here](https://github.com/tmedwards/sugarcube-2).

### Compiling with Tweego
If you've taken a look at this repository, you may have noticed a peculiar file structure. All of the story resides in a directory named `src`! This allows us to run some commands to easily compile our files into a Twine format:
```
tweego -o release.html src
```
This command will output a single file, `release.html`, that contains all your code. Simply open it in a browser of your choice, and you can play your game! Perfect for release builds.

But, if we're still developing the game, we want something better. We can run:
```
tweego -o hottest.html src -w -t
```
This will output `hottest.html`, which we can run in the broswer. However, with this command, we use two special tags:
* `-t` `--test` This tag enables test mode. This will let us view variables and generally debug our story.
* `-w` `--watch` This tag enables watch mode. It'll watch the input files for changes, and rebuilds the output when it detects them. That means we just need to refresh the browser page whenever we make a change to see it live. Very handy! (This feature is generally called a "hot reload", though it this case, it's more of a "hot rebuild" as the browser doesn't automatically reload for us.)