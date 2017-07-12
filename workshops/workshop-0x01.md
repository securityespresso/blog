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

<div class='expandable-container'>
<div class='header'>HTTP Basics</div>
<div class='content'>Content here</div>
</div>
<div class='expandable-container'>
<div class='header'>HTTPS</div>
<div class='content'>Content here</div>
</div>
<div class='expandable-container'>
<div class='header'>Intercepting proxies & other tools</div>
<div class='content'>Content here</div>
</div>
<div class='expandable-container'>
<div class='header'>Headers and headers' vulnerabilities</div>
<div class='content'>Content here</div>
</div>
<div class='expandable-container'>
<div class='header'>Session management</div>
<div class='content'>Content here</div>
</div>
<div class='expandable-container'>
<div class='header'>Application layer vulnerabilities</div>
<div class='content'>Content here<br>
Content here<br>
Content here<br>
Content here<br>
Content here<br>
Content here</div>
</div>


## Self-assessment

## Requirements

* A laptop, running any OS with a minimum of 2 GB RAM
* Admin rights enabled on the user which is going to be used throughout the hackathon
* VirtualBox or VMWare Workstation

## FAQs

<b>What professionals is this course targeted at?</b><br>
We believe that a working knowledge of how Web Security works is useful for any person working either as a programmer or in a security-focused profession. Even if you do not build websites or web applications, the knowledge related to how both of these can be exploited can come in handy, for example, in bug bounties or even in testing whether your most frequently used websites are vulnerable to the types of security attacks covered in this course.

<script language="javascript" type="text/javascript">
document.querySelectorAll('.expandable-container').forEach(container => {
  const header = container.querySelector('.header')
  const content = container.querySelector('.content')
  content.classList.add('hidden')
  header.addEventListener('click', function(event) {
    event.preventDefault()
    content.classList.toggle('hidden')
  }, false)
})
</script>
