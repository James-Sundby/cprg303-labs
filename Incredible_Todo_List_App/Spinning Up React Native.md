Date: 2023-10-29 
Author: [James S](https://github.com/James-Sundby)
# System Specification
*Document specifications of the system being used for React Native development. This includes the CPU, RAM size, and Windows version.*

For this class, I will be primarily developing my group's React Native project on my laptop with the following specs:
- OS: Windows 11 Home v22H2
- RAM: 16.0 GB
- CPU: AMD Ryzen 7 5800H 

# Installation Instructions
*Include step-by-step instructions for installing the necessary tools and dependencies required for the framework, such as Node.js, and the React Native CLI.*

This project will require Node.js, a JDK, Android Studio, VS Code, and Chocolatey.

> [!Warning]
> As a precaution with any script posted online, it is best to inspect the documentation for any suspicious code before running the script.

## Chocolatey
1. Open an administrative shell by going to the start menu and searching for the 'Command Prompt', then right click and select 'Run as Administrator'
 2. When the User Account Control prompt appears click 'Yes' to make changes to the system
 3. Input the following command into the terminal window:  `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
3. Hit the 'Enter' key
4. Wait for confirmation message

## Node.js and Open JDK 11
1. Open an administrative shell by going to the start menu and searching for the 'Command Prompt', then right click and select 'Run as Administrator'
2. When the User Account Control prompt appears click 'Yes' to make changes to the system
3. Input the following command into the terminal window: `choco install -y nodejs-lts microsoft-openjdk111`
4. Hit the 'Enter' key
5. Wait for confirmation message

## Android Studio
1. Head to the Android Studio website: https://developer.android.com/studio/index.html
2. Click the link to download the most recent release of the Android Studio IDE (at this time that is vGiraffe)
3. Once clicked the link will prompt the user to read and accept the license terms and conditions, read through and click the checkbox to agree and start the download
4. Once complete, navigate to the downloads folder and click on the Android Studio exe file to begin the installation process
5. While the installation wizard is running select the following installation options:
	1. Android SDK
	2. Android SDK Platform
	3. Android Virtual Device
6. Wait for a confirmation message

## Visual Studio Code
1. Navigate to the Visual Studio Code website: https://code.visualstudio.com/
2. Click the 'Download' link to be directed to the version selection.
3. Select the x64 Windows 11 version
4. Once the download is complete, navigate to the file location and click on the exe file to begin the installation process.
5. Wait for a confirmation message

# Configuration Steps
*Detail any necessary configuration steps required to set up the framework, such as setting environment variables or configuring project settings.*

Now that everything is installed, some additional components will need to be downloaded and our environment variables will need to be configured.

## Android Studio Components
By default, Android Studio will download the most recent version of the Android SDK, for this project we will be using Android 13 vTiramisu. This will require some additional downloads:

1. Open Android Studio
2. Click on the 'More Actions' to pull open the menu, then select 'SDK Manager'
3. Select the tab labelled 'SDK Platforms' and check the box labelled 'Show Package Details'
4. Expand the entry for 'Android 13' and select the following items if they are not already checked off:
	1. Android SDK Platform 13
	2. Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
5. Click the tab for 'SDK Tools' and and check the box labelled 'Show Package Details'
6. Look for 'Android SDK Build-Tools' and select '33.0.0' if it is not already checked.
7. Hit 'Apply' to download the additional tools

## Environmental Variables
Some environment variables will also need to be set up
1. Open the start menu and type in Control Panel into the search bar
2. Click to open the Control Panel
3. Select the option for 'User Accounts', and once inside select the 'User Accounts' submenu
4. Click the option to 'Change my environment variables'
5. Select New and add an 'ANDROID_HOME' user that has a variable value set to the path of the Android SDK
6. Type in 'C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk', inserting your username
7. Click 'Ok' to save the new variable
8. Select the 'Path' variable and click the 'Edit' button
10. Click 'New' and add the following path to the list '%LOCALAPPDATA%\Android\Sdk\platform-tools'
11. Confirm the changes

# Project Creation
*Outline the steps involved in creating a new project using the framework, including any necessary setup or configuration.*

1. In VS Code, navigate to the folder that will hold the project
2. Open the terminal
3. Type in: `npx react-native@latest init ProjectName`, inserting the name of your project

# Running the Project
*Detail how to run the project in an Android Device Simulator.*

In order to run the project, a virtual Android device needs to be created. Once that is complete, the project can be run in VS Code using Metro.

## Setup Virtual Android Device
1. Open Android Studio
2. Select 'Open'  and navigate to the folder created for the React project
3. Click on the 'AVD Manager' option from the menu bar
4. Select 'Create Virtual Device' and select a mobile phone from the list
5. Check the 'Tiramisu' API Level 33
6. Click 'Next'
7. Click 'Finish'
8. Wait for a confirmation message

## Using Metro
1. Open VS Code
2. Open the folder workspace for the project
3. On the folder explorer, right click on the folder holding the project and select 'Open Integrated Terminal'
4. In the terminal type in: `npm start`
5. Wait for Metro to start
6. Once Metro has started, and it's menu is displayed, type in `a` in the terminal to start the virtual Android device
7. Once the virtual device has loaded in, the default React page will be shown.

# Troubleshooting
*Include information on how to troubleshoot common issues that may arise during setup or development, such as debugging and error messages. This may need to be updated in the future.*

## Environment Variables
To confirm that the environment variable has been correctly set up, the following steps can be performed:
1. Open the start menu and type in 'PowerShell' in the search bar
2. Select 'Windows PowerShell' to open a command window
3. Type in `Get-ChildItem -Path Env:\`
4. Check the list to confirm that 'ANDROID_HOME' is listed

## Previous Global React package
If you previously installed a global 'react-native-cli' package, it should be removed to prevent any potential issues
1. Open VS Code
2. Open the terminal
3. Type in the following command: `npm uninstall -g react-native-cli @react-native-community/cli`

# Resources
*Provide links to additional resources and documentation that can be used for reference and further learning, such as official documentation, tutorials, and Stack Overflow answers.*
- [Chocolatey CLI Documentation](https://docs.chocolatey.org/en-us/choco/setup)
- [Chocolatey Download Script Information](https://community.chocolatey.org/install.ps1)
- [Node.js v20.9.0 LTS Documentation](https://nodejs.org/dist/latest-v20.x/docs/api/)
- [Open JDK 11](https://openjdk.org/projects/jdk/11/)
- [Android Studio Documentation](https://developer.android.com/studio)
- [Visual Studio Documentation](https://code.visualstudio.com/docs)