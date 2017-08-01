---
layout: page
title: Web Security Fundamentals Workshop
permalink: web-security-fundamentals-workshop.html
published: true
in_header: true
emoji: 💻
ogimage: /content/images/workshop-cover.png
css: workshops.css?1#
---

## About this course
This course is designed to give you a solid understanding of both the **threat models** of web-based attacks and also the knowledge to **secure your own web applications**. The journey of securing and defending must start with having a clear mental picture of **how the web works**. At the beginning of this course, you will dive into the basics of HTTP - the protocol that powers the web. Afterwards, we will focus on some of the most common vulnerabilities, understanding how to exploit them as well as learning how to properly protect your apps against them.

This course is designed to create and develop **the hacker mindset**. Participation is key! Throughout this course you will be guided through examples and hands-on exercises.

<button class="enroll-button">Enroll now</button>

<div class="container">
  <div class="flex-item"><div class="circleimg" style="background-image: url(/assets/images/anatol.jpg)"></div></div>
  <div class="flex-item"><b>Taught by</b>: Anatol Prisăcaru</div>
</div>

| **Level**      | Intermediate        |
| **Date**       | 26th of August 2017 |
| **Timeline**   | 9:00 - 17:00        |
| **Location**   | Str. Lirei 10       |
| **Language**   | Romanian            |

## Syllabus

<div class="expandable">
    <div class="section-header">HTTP Basics</div>
    <div class="section-content">This section will touch on core concepts in HTTP. You will learn the structure of a HTTP packet, and how the communication between a client and a server is modeled. Understanding the anatomy of a HTTP packet exchange is crucial for working with web applications.</div>
</div>
<div class="expandable">
    <div class="section-header">HTTPS</div>
    <div class="section-content">Moving onwards, this section will dive into securing the previously-discussed communication. You will go through the protocol specifications for SSL/TLS, which will provide you with a good understanding of how the protocol we use today has evolved. You will also learn about certificates and how to work with them.</div>
</div>
<div class="expandable">
    <div class="section-header">Attack types &amp; intercepting proxies</div>
    <div class="section-content">This section will categorize attacks that target websites, web applications, and their clients as well as the role of intercepting proxies in penetration testing. You will learn how to set up and use such tools, in a way similar to how an attacker would make use of them. Doing hand-on exercises such as this, where you attempt to attack a web application, teach you what kinds of pitfalls to avoid when developing your applications.</div>
</div>
<div class="expandable">
    <div class="section-header">Headers</div>
    <div class="section-content">In this section, you will learn some of the most common vulnerabilities that affect HTTP headers. These headers model the constraints on a HTTP packet exchange, and understanding how they can influence the interpretation of data.</div>
</div>
<div class="expandable">
    <div class="section-header">OWASP Top 10 overview</div>
    <div class="section-content">The Open Web Application Security Project (OWASP) is an international organization dedicated to enhancing the security of web applications. As part of its mission, OWASP sponsors numerous security-related projects, one of the most popular being the Top 10 Project. This project publishes a list of what it considers the current top 10 web application security risks worldwide. In this section we will make an introduction and a short analysis of the </div>
</div>
<div class="expandable">
    <div class="section-header">Authentication &amp; Session Management</div>
    <div class="section-content">Proving identity on the web has turned out to be a very hard problem. In this section, you will lean how both the server and the client can prove their identity to each other during a HTTP session, as well as how this process can go wrong or can be exploited from the outside.</div>
</div>
<div class="expandable">
    <div class="section-header">Application layer vulnerabilities</div>
    <div class="section-content">In the final section of this workshop, you will go through some of the most important vulnerabilities of websites and web applications, beyond session management and authentication. You will understand how improper implementation of the workflow of a web application can be the difference between a safe deploy and a data breach. With this information in hand, you can strengthen and protect your web deployments.</div>
</div>

## Course timeline

**9:00  - 10:00** Initial setup, you will receive all the materials needed for this course  
**10:00 - 13:00** First half of the course  
**13:00 - 14:00** Lunch! We will provide food and coffee  
**14:00 - 17:00** Second half of the course  

## Is this course for me?

This workshop is aimed towards application developers, application architects, penetration testers, and security professionals who are interested in learning about web application security and defensive strategies and methods.

**Take this self-assessment test** to find out whether this course is for you! If you've answered all the questions correctly, you probably already have a solid understanding of web security. These are just some of the subjects which will be covered in the course. The questions in this test may have **multiple or no correct answers**.

<div class="quiz">
    <div class="question"></div>
    <ul class="answers"></ul>
    <div class="quiz-footer">
        <span class="status"></span>
        <button class="submit">submit</button>
    </div>
</div>

- An application that reads and responds to HTTP requests from a user is commonly known as?
  - HTTP Parser
  - HTML Parser
  - Web Browser
  - Web Server <span class="correct"></span>

- Which of the following Communication Protocols does not rely on TCP?
  - XMPP
  - DNS
  - HTTP
  - NTP <span class="correct"></span>

- Which of the following solutions prevents cookie stealing using an XSS attack?
  - Using the `X-XSS-Protection` header
  - Using the `secure` flag
  - Encrypting the cookies
  - Using the `httpOnly` flag <span class="correct"></span>

- Authentication can be defined as
  - Proving a user's identity <span class="correct"></span>
  - Having the ability to do something with a computer resource
  - Having the permission to use a resource

- Authorization can be defined as
  - Proving a user's identity
  - Having the ability to do something with a computer resource
  - Having the permission to use a resource <span class="correct"></span>

- Which scenario is likely to allow header injection?
  - Redirecting users to URLs from a GET parameter <span class="correct"></span>
  - Sending an email to an unvalidated email address
  - Not setting `X-Frame-Options` header
  - Using unsanitized/untrusted input in HTML

- Using front-end web application frameworks totally protects from XSS vulnerabilities
  - True
  - False <span class="correct"></span>

- Which of the following scenarios about CSRF are FALSE?
  - CSRF protection can be omitted on login forms since it requires knowledge of a valid username & password pair <span class="correct"></span>
  - CSRF tokens must be encrypted and stored in the database <span class="correct"></span>
  - CSRF tokens should be rotated every month <span class="correct"></span>
  - CSRF tokens mitigate XSS attacks <span class="correct"></span>

- Consider the following code:

  ```js
  const exec = require('child_process').exec;
  // replace " with \"
  const imagefile = userinput.replace('"', '\\"');
  const command = 'convert "' + imagefile + '"'
      + ' -resize 200×100 thumbnail.png';

  exec(command, function (err, out) {
    if (err !== null) {
      console.log('thumbnail error: ', err);
    }
  });

  ```

  Which statements about this snippet are TRUE?

  - The code is safe because Node.JS is not prone to command injection vulnerabilities (like in PHP or Java)
  - The code is safe because the argument is enclosed in double quotes and the input is sanitized
  - The code is vulnerable to command injection because an attacker could spawn a subshell <span class="correct"></span>
  - The code is vulnerable to command injection because an attacker could use the `|` (pipe) character to bypass the imposed security measures

## Requirements

This course requires general familiarity with web technologies such as HTML, JavaScript, SQL, and programming logic. Some knowledge of protocols especially TCP/IP will be helpful but not required.

Attendance to this course also requires:
* A laptop, running any OS with a minimum of 4 GB RAM
* Admin rights enabled on the user which is going to be used throughout the workshop
* VirtualBox or VMWare Workstation

## What will you receive during this course?
- An Ubuntu Linux virtual machine containing pre-installed security tools;
- Sample applications / scripts;
- All the materials used throughout the course;

## Enroll

<div id="enroll" style="width:100%; text-align:left; margin: 50px 0;">
  <iframe src="//eventbrite.com/tickets-external?eid=36667076212&ref=etckt" frameborder="0" height="400" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
</div>
