# MarkUp Research Paper

## Background

MarkUp is one of subproject of Project Factor. Project Factor was initiated to build a suite of applications that would
automatically generate text transcripts from IIT course videos using open-source software tools. 
Project Factor is divied by three parts:
* Project Convert 
* Project Window Pane 
* Project MarkUp

## Introduction

For project Convert and project Window Pane, they convert video or audio( such as a speech) into text with timestamp using machine translator, in other words, convert vocal speech into unformated text using libraries. Project MarkUp is to handle those unstructured text. About project Convert and project Window Pane, please refer to other teammates' research paper. Now let's focus on my project - MarkUp.

MarkUp allows a user to enter a drag and drop application and mark unstructured text via a simple GUI interface. 

The Goal of MarkUp:
* Convert unformatted text into formatted text
* Build user Content Management System
* Formatted text can be rendred into a DocBook or HTMLBook format which allows for export to PDF, HTML and even ePub
* PDF and HTML formats can be printed too - making read -time book

## Functionalities of MarkUp

As an independent study for a course in one semester, consider that I only have three months to do this project, I picked up two goals of MarkUp to implement. Functionalities of MarkUp I have implemented is following:

* User authentication
* Account management 
* Multi-user synchronous editing capabilities
* All functions performed using Android touch based interface targeting tablets or phone
* All user markup saved and referenced from a common database
* Single user interface which will add, remove and share functionality based in user type(readers, user)

Next, I will explain how I implement MarkUp project. Hope students who want to go on my work pick up my work easily.

## Software Install

For software part, there have two parts, backend and frontend. So I will introduce installation from these two aspects.
##### Sails.js Version
0.12.0
##### Sails.js Installation

To install the latest stable release with the command-line tool:
```
sudo npm -g install sails
```
On Windows (or Mac OS with Homebrew), you don't need sudo:
```
npm -g install sails
```
You may see some npm WARN deprecated messages when installing Sails. These can be safely ignored. They don’t come from Sails itself, but rather from some packages that Sails relies on--packages which themselves rely on some older modules. The Sails team is committed to keeping the framework secure and stable, and sometimes that (counter-intuitively) requires using some older versions of packages. See this thread for more info about the warnings, and this one for a discussion about updating dependencies in general.

You can go to <http://sailsjs.org/get-started> see more details.

