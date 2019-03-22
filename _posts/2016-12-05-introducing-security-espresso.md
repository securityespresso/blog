---
title: Introducing Security Espresso
layout: post
date: '2016-12-05 09:00:00 +0000'
categories: announcements
image: welcome.jpg
---

For the past years I've been a web developer. As time passed and I've learned more and more about web and the technologies powering it, it became easier for me to understand why security vulnerabilities happen, how attackers could exploit them and how to fix them. I've started to pay more attention to security, I joined [Cyber Security Research Center from Romania][ccsir] and got involved in the organization of [DefCamp][defcamp] - the most important conference on Hacking & Information Security in Central and Eastern Europe.

## Yet another community?

Naturally, there are plenty of communities that are oriented to programmers: one can find a community pretty much for any programming language, starting with JavaScript, Python, PHP and even [Brainfuck][brainfuck]. Similarly, there are a lot of communities which focus on raising the security awareness and the number of security oriented projects and initiatives grows with every year.

![Programming and security communities venn diagram]({{ site.baseurl }}/content/images/communities.png)

Now here's the problem: while all the security communities, events and conferences do a good job on raising the security awareness, they fall short on fixing the root cause of security failurers: proper education for programmers with concrete examples on how the vulnerabilities are being introduced into the code and how to fix them.

We do indeed have a lot of informational resources but most of them either require a deep understanding of web technologies either are not accessible or not publicly available. Consider for example the OWASP article on XSS (Cross Site Scripting) Prevention Cheat Sheet and let's take a look at [RULE #1][rule#1]. The page provides indeed good technical reference on where and what should be escaped. It contains no practical examples aside from the ESAPI reference implementation which makes it pretty impenetrable for a junior programmer.

This is the problem Security Espresso is trying to solve. Programmers should have access to this information along with code examples. This should not be limited to only a particular language or framework, not even limited to web technologies: everyone is welcome.

## Behind the name

There is an old joke about how programmers are systems which turn coffee into code. Then if you look around and take in the piling news containing words such as "breach", "exploit", "vulnerability", "hacking" you end up wondering: what are they putting into that coffee? What coffee is it that produces exploitable, breakable, flimsy code? Maybe if we'd increase the caffeine concentration, that would produce foolproof and secure code?

What we hope to achieve, within Security Espresso, is to create and share the kind of knowledge that will shed light into every nook and cranny of writing secure code. We want the people writing code to be able to understand, be confident that their work can withstand attacks, survive them; we want to make sure the next systems being built are free of the flaws which are exploited today. And we absolutely need all this information to be free, and accessible for everyone.

Just like there's no great water-cooler story that starts with a salad, we believe there's no learning experience that starts with "just trust me on this". Join us and let's spread the knowledge to all those who need a good, warm espresso during those late nights.

## I want to join!

Glad to hear that! You can find us on:

- [Facebook: Security Espresso (international group)][fb-se-intl]
- [Facebook: Security Espresso Romania][fb-se-ro]
- [Security Espresso GitHub organization][github] where we will be publishing all the information.

As you can notice, we decided to use GitHub instead of a wiki. Although both use markdown, GitHub-flavored markdown is better known among programmers, and almost every programmer has a GitHub account and can contribute.

All the information is published under the [Creative Commons Attribution-ShareAlike 4.0 International License][license].

## Homework: a practical example

Finally, as a small challenge for you, let's review a tricky example and take a look at this PHP code snippet:

```php
<?php

$id = mysqli_real_escape_string($dbh, $_GET['id']);
$query = "SELECT * FROM articles WHERE id=" . $id;
$result = mysqli_query($dbh, $query);

```

Can you spot any vulnerability? If you did, good for you! However this might be tricky to spot and if you didn't - read on.

As any programmer must have learned we can clearly see that the input is escaped. So why is that code vulnerable? The vulnerability lies in the fact that there are no quotes around the value and an attacker can provide this input:

```
http://example.com/?id=-1 UNION SELECT version(), database()
```

There are no quotes or backslashes in the input, so `mysqli_real_escape_string` has nothing to escape in the provided input and passes the string verbatim, ending up with the following **vulnerable** query:

```sql
SELECT * FROM articles
WHERE id=-1 UNION SELECT version(), database()
```

To make this example safe we can, at very least, add the quotes:

```php
<?php

$id = mysqli_real_escape_string($dbh, $_GET['id']);
$query = "SELECT * FROM articles WHERE id='" . $id . "'";
$result = mysqli_query($dbh, $query);

```

**Note:** While being careful and properly using `mysqli_*` functions you can be safe, however it's easy to let a vulnerability slip in. The recommended method is to use prepared statments as PDO will properly escape the input:

```php
<?php

$statement = $dbh->prepare('
    SELECT * FROM articles WHERE id = :id
');

$statement->execute([
    ':id' => $_GET['id']
]);

```

_**Heads up**: There's also [a known vulnerability when using GBK charset][gbk-sqli] which actually affects PDO as well, but it requires a very obscure edge case and is entirely another story. You can discuss these in greater detail on the community groups and on the GitHub page!_

This snippet will perform the following **safe** SQL query:

```sql
SELECT * FROM articles
WHERE id = '-1 UNION SELECT version(), database()'
```

You can try this example live (click ▶ in the upper right corner):

<!-- [![Test Image]({{ site.baseurl }}/content/images/trylive.png)][example] -->

<iframe width="100%" height="600" frameborder="no" src="https://codp.in/e/se-welcome-example?hide=readme&open=index.php"></iframe>

[defcamp]:     https://def.camp/
[ccsir]:       http://ccsir.org/
[brainfuck]:   https://www.reddit.com/r/brainfuck/
[rule#1]:      https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
[fb-se-intl]:  https://www.facebook.com/groups/sec.espresso
[fb-se-ro]:    https://www.facebook.com/groups/sec.espresso.romania
[github]:      https://github.com/securityespresso
[license]:     https://creativecommons.org/licenses/by-sa/4.0/
[gbk-sqli]:    http://stackoverflow.com/a/12118602
[example]:     https://codp.in/e/se-welcome-example?hide=readme&open=index.php