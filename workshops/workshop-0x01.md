---
layout: page
title: Workshop 0x01
permalink: workshop-0x01.html
css: workshops
---

## Web Security Fundamentals

**About this course**: This is the course you want to take if you want to understand security on the web!

This course is designed to give you a solid understanding of the fundamental technologies that are at play in web applications. The journey of securing and defending must start with having a clear mental picture of how the web works. At the beginning of this course, you will dive into the protocols that power the web. Afterwards, you will focus on some of the most common vulnerabilities, which are behind some of the most effective security attacks and breaches.

You will be guided through hands-on exercises throughout this course. Participation is key! The information provided to you by the mentor of this course will be applied to realistic attack and defense scenarios, using technologies which are ubiquitous in the security operations scene.

<div class="container">
  <div class="flex-item"><div class="circleimg" style="background-image: url(/assets/images/anatol.jpg)"></div></div>
  <div class="flex-item"><b>Taught by</b>: Anatol Prisăcaru</div>
</div>

| <b>Level</b>        | Intermediate  |
| <b>Commitment</b>   | 6 hours       |
| <b>Language</b>     | Romanian      |

## Syllabus

<div class="expandable">
    <div class="section-header">HTTP Basics</div>
    <div class="section-content">This section will touch on core concepts in HTTP. You will learn the structure of a HTTP packet, and how the communication between a client and a server is modeled. Understanding the anatomy of a HTTP packet exchange is crucial for working with web applications.</div>
</div>
<div class="expandable">
    <div class="section-header">HTTPS</div>
    <div class="section-content">Moving onwards from unsecured HTTP connections, this section will dive into securing the previously-discussed communication. You will go through the protocol specifications for SSL/TLS, which will provide you with a good understanding of how the protocol we use today has evolved. You will also learn about certificates, how to work with them, and about the vulnerabilities that are most common in this area.</div>
</div>
<div class="expandable">
    <div class="section-header">Attack types</div>
    <div class="section-content"> This section will categorize attacks that target websites and web applications. Depending on which vulnerabilities are exploited, these attacks may focus exclusively on the server, on the client, or they may string together several approaches. It's important to be able to identify what the weak points are on either end, in order to make the most of learning how to secure them.</div>
</div>
<div class="expandable">
    <div class="section-header">Intercepting proxies &amp; other tools</div>
    <div class="section-content">Any mistakes in the implementation or deployment of HTTS can be exploited. In this section, you will learn about how malicious entities can impersonate either of the actors in a HTTPS connection in order to gain access to the information being relayed. Understanding the reasons why these attacks can success is going to help you make more secure deployments, when working with HTTPS.</div>
</div>
<div class="expandable">
    <div class="section-header">Headers</div>
    <div class="section-content">In this section, you will learn the meaning and semantics of some of the most common HTTP headers. These headers model the constraints on a HTTP packet exchange, and understanding how they can influence the flow of data is crucial both for building secure web applications, but also for interacting with other applications on the web, be it as a user or through scripts.</div>
</div>
<div class="expandable">
    <div class="section-header">OWASP top 10</div>
    <div class="section-content">The Open Web Application Security Project (OWASP) is an international organization dedicated to enhancing the security of web applications. As part of its mission, OWASP sponsors numerous security-related projects, one of the most popular being the Top 10 Project. This project publishes a list of what it considers the current top 10 web application security risks worldwide. In this section, we will go through this list, the most recent version of it being from 2013.</div>
</div>
<div class="expandable">
    <div class="section-header">Authentication & session management</div>
    <div class="section-content">Proving identity on the web has turned out to be a very hard problem. In this section, you will lean how both the server and the client can prove their identity to each other during a HTTPS session, as well as how this process can go wrong or can be exploited from the outside.</div>
</div>
<div class="expandable">
    <div class="section-header">Application layer vulnerabilities</div>
    <div class="section-content">In the final section of this workshop, you will go through some of the most important vulnerabilities of websites and web applications, beyond session management and authentication. You will understand how improper implementation of the workflow of a web application can be the difference between a safe deploy and a data breach. With this information in hand, you can strengthen and protect your web deployments.</div>
</div>

## Self-assessment

## Requirements

* A laptop, running any OS with a minimum of 2 GB RAM
* Admin rights enabled on the user which is going to be used throughout the hackathon
* VirtualBox or VMWare Workstation

## FAQs

<b>What professionals is this course targeted at?</b><br>
We believe that a working knowledge of how Web Security works is useful for any person working either as a programmer or in a security-focused profession. Even if you do not build websites or web applications, the knowledge related to how both of these can be exploited can come in handy, for example, in bug bounties or even in testing whether your most frequently used websites are vulnerable to the types of security attacks covered in this course.
