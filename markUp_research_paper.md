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

## Installation
### Software Install

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

##### Javac -version Version
1.6.0_65
##### Android Studio Installation
Firstly, you go to <http://developer.android.com/sdk/index.html> to download Android Studio, then While the Android Studio download completes, verify which version of the JDK you have: open a command line and type javac -version. If the JDK is not available or the version is lower than 1.8, download the Java SE Development Kit 8.

To install Android Studio on Windows, proceed as follows:
* Launch the .exe file you downloaded.
* Follow the setup wizard to install Android Studio and any necessary SDK tools. I used mac, installation is easy.
On some Windows systems, the launcher script does not find where the JDK is installed. If you encounter this problem, you need to set an environment variable indicating the correct location. Select Start menu > Computer > System Properties > Advanced System Properties. Then open Advanced tab > Environment Variables and add a new system variable JAVA_HOME that points to your JDK folder, for example C:\Program Files\Java\jdk1.8.0_77.

You can go to <http://developer.android.com/sdk/installing/index.html> see more android studio installation details.

##### Android Studio Configuration
This is my build.gradle file. There have compileSdk, buildTools and dependencies information.
```
apply plugin: 'com.android.application'
android {
    compileSdkVersion 23
    buildToolsVersion "23.0.1"
    useLibrary 'org.apache.http.legacy'

    defaultConfig {
        applicationId "com.example.miaodonghan.markupproject_01"
        minSdkVersion 15
        targetSdkVersion 23
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    testCompile 'junit:junit:4.12'
    compile 'com.android.support:appcompat-v7:23.1.1'
    compile 'us.feras.mdv:markdownview:1.1.0'
}
```
### Hardware Tools

You can user any android platform version higher than android 4.0 API 15. I use Nexus 7 API 22.

### Other Tools - Postman
I always use Postman to debug backend, which takes less time than debug using android studio emulator or android device.

##### Install Postman
Postman now offers a Mac App. Unlike the Chrome app, the Mac app is packaged with add-ons that make request capturing and cookie handling seamless.

To install go to <https://www.getpostman.com/apps>, and click 'Get Mac App'.The download should take a few minutes, depending on your internet connection. Once you've downloaded the app, you can install and launch Postman like any other Mac app. 
## Architecture of MarkUp
After gathering information or requirements of MarkUp and understand MarkUp, I figured out Functionality of MarkUp and main service of MarkUp. Achitechure of MarkUp is below:
![Achitechture](images/architecture.jpg)

  * Authentication
  
  Authentication is a process in which the credentials provided are compared to those on file in a database of authorized users' information on a local operating system or within an authentication server. If the credentials match, the process is completed and the user is granted authorization for access.
  * Restful service

https://github.com/RestCheatSheet/api-cheat-sheet#api-design-cheat-sheet
  >File convert service
  >Android Device
>Design of MarkUp
  *Model and ORM
  *Controller
  *Router
  *view --android studio development
    >activity
    >sharedProference
    >UI
>Flow Chart of MarkUp
  >explanation of flow chart
>work in the future
>Challenge
>conclusion
