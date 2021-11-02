# README
## Purpose:
  Describe the practical steps of how to host and format a resume using GitHub pages, Jekyll and a Markdown editor while relating the practical steps to the general principles proposed by Andrew Etter in the bok _Modern Technical Writing_.

## Prerequisites:
* [Markdown](https://www.markdownguide.org/basic-syntax/) formatted resume  
*  GitHub Account  
* Optional: [Markdown Editor](https://stackedit.io).

## Instructions:

### Step 1
Go to [GitHub](http://recordit.co/J2Jt1TVyHn) and create a new repository.  


![](http://g.recordit.co/J2Jt1TVyHn.gif)
*Important*: The repository name must be "USERNAME".github.io, where USERNAME is your GitHub username. Ensure the repositroy is public. 
*See below* <img width="1318" alt="Screen Shot 2021-10-28 at 8 35 16 PM" src="https://user-images.githubusercontent.com/44457817/139358833-31b489a7-905a-4d3c-a60e-6b262d6989a3.png">
Why are we using GitHub? 

    Distributed Version Control systems like GitHub introduce a means for collaberation  
    between two individuals. People can make changes to projects and contribute their ideas,   
    and no changes will be made to the master file until the owner of the repository decides  
    the changes are appropriate. This integrated collaberation is critical in software development  
    as many developers often work simultaniously on a single project. We are only focusing on documentation,  
    however the same prinicples apply. 
    

### Step 2
Create 2 files named index.md and README.md respectively  
![](http://g.recordit.co/umVZDFua7I.gif)

Why Markdown?

    When you go to a repository hosted on GitHub, chances are you will come across a file called README.md.   
    This file is meant to give a quick summary of the product being documented, give intrustions   
    how to build the project and explain how one could contribute to the project.  
    The file format .md stands for Markdown, a file format which is changing the way software developers  
    are writing techincal documentation. Markdown's purpose is to make producing well   
    formed XML easier, which inturn makes building a website easier. Markdown has a easy to understand  
    syntax, and is quickly becoming an industry standard. 

### Step 3  
Copy and paste your markdown formatted resume into index.md 

    We are again using a Markdown formmated file, in this case our resume. It is important that our resumue   
    is easily adjustable because resumes should be kept up to date.By using a Markdown file, this allows  
    us to easily make adjustment to our resume and republsish the resume on our static site. 

![](http://g.recordit.co/U7kFmZAyfk.gif)

  
### Step 4
On the homepage of your repository, go to the Settings. Once there scroll to the pages section. Ensure that your branch is main and folder is set to /(root) ![](http://g.recordit.co/W80gJXXfAK.gif)

### *Optional Steps*
Choose a theme for your static site using a Jekyll theme
![](https://recordit.co/F3hqQy1FLJ)

Change the title of your static site
![](http://g.recordit.co/jg48VYiNqQ.gif)

### Step 5
Using your prefered search engine, search for your website. ![](http://g.recordit.co/jsMpXWrxNM.gif)

Congratulations you have successfully set up your first static site generator using GitHub Pages. 


## More Resources:
[Markdown Guide](https://www.markdownguide.org/basic-syntax/).

[_Modern Technical Writing_ by Andrew Etter](https://www.amazon.ca/Modern-Technical-Writing-Introduction-Documentation-ebook/dp/B01A2QL9SS).

[Jekyll Documentaion](https://jekyllrb.com/docs/).


## Authors and Acknowledgments:
 Author: Adam Donen 
 
 Group 10 Members:
 Jishan Arora,
 Joseph Godard,
 Tanisha Turner,
 Xing Zhou

 ## FAQs

 1) Why is Markdown better than a word processor?
 
        Word processors are an excellent choice for writing papers and creating forms, however most   
        word processors are built to create PDFs. As we have discussed,documentation should be a   
        collaberative approach, and thus creating PDFs is an inefficient way for collaberation.   
        Additonally documentaion should be hosted online,and most word processors do not have a   
        suitable export for HTML. Markdown is built for  collaberation and for online distrubition.   
        Markdown formatted files are much more common than the .docx files from word processors,   
        services will often have markdown editors built into their platforms while word processors   
        require conversion to proper file formats.


 2) Why am I getting a 404 error?

        Make sure your repository name is in the correct formatt (USERNAME.github.io)  
        Make sure your index.md is in the correct folder, and is formatted correctly. 
        Make sure you are going to the correct URL (https://USERNAME.github.io) 
