<?php
    $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    if ($title == 'Project') {
        switch ($content) {
            case 'd-wok-torino':
                $image = public_path().'/images/d-wok-torino-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - D-Wok';
                $content = 'The D-Wok site was realized using WordPress platform, as the client is totally autonomous. The template was created in only one page (except for the details of the works). It is responsive so it is easily visible on every device and with every screen resolution.';
                break;
            case 'stefano-buffetti-homeopath':
                $image = public_path().'/stefano-buffetti-omeopata-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Stefano Buffetti';
                $content = 'The decision to implement the jQuery library was made both to try to make the site more dynamic and to try to break away from the normal structure of colleagues’ websites.

All icons were created as a font so as to make them clearer and to make sure the loading of the site was not slowed down.';
                break;
            case 'federica-borgato-photographer':
                $image = public_path().'/images/federica-borgato-photographer-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Federica Borgato';
                $content = 'The site was designed to have two key features: to be easy to update, and responsive. I create the template for Wordpress using as plugin to create the page the visual composer of Elegant Themes (Divi).';
                break;
            case 'santa-design-studio':
                $image = public_path().'/images/santa-design-studio-designer-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Santa Design Studio';
                $content = 'The site was designed to have two key features: to be easy to update, and responsive. I create the template for Wordpress using as plugin to create the page the visual composer of WPBakery and I create some new shortocode for the composer to simplify update the pages and projects.';
                break;
            case 'mci-contest':
                $image = public_path().'/images/material-connection-italia-contest-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - MCI Contest';
                $content = 'I create the login by Facebook, Twitter or Google plus, and the student can send the project using the appropriate form so that it could be reviewed and, if deemed valid, automatically added by the administrator. The site contained several pages explaining the project, what they did with the presentation of certain products and the part about the contest itself. In this section you could view a brief description of the contest, a slide of the projects involved and a list of the top 3 students.';
                break;
            case 'ceramic-futures':
                $image = public_path().'/images/ceramic-futures-contenst-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Ceramic Futures';
                $content = 'In the Diary all jobs added by users registered for the contest were collected, there was the title of the project, author’s name, votes received, visits and comments and finally a short description of the project. Going into each project, in addition to the automatic counting of the visit, you could vote for the project, comment on it, and see the slideshow of the images.';
                break;
            case 'pes-widget-party-of-european-socialists-unites-the-socialist':
                $image = public_path().'/images/pes-widget-party-of-european-socialists-unites-the-socialist-luigi-mattia-buffetti.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - PES Widget';
                $content = 'I realized the template in xhtml, in collaboration with Latte Creative, in compliance with the standards of the W3C, respecting the ‘triple A’ for protocol conformance level easily accessible to the blind. It includes the following sections and tools, each of which is explained in more detail on the main page of each section: Voting on 20 major issues, on which the members of the PES (MEP MEPs) also voted in the last five years. The voters can find out which MEP or new candidate comes closest to their views. Widget';
                break;
            case 'electio-2014':
                $image = public_path().'/electio-2014-european-parlament-bruxelles-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Electio 2014';
                $content = 'The platform was developed by VoteWatch Europe, an independent organization set up to promote better debates and greater transparency in EU decision-making, by providing easy access to, and analysis of, the votes and other activities of the European Parliament (EP) and the EU Council of Ministers (Council). I realized the template in xhtml, in collaboration with Latte Creative, in compliance with the standards of the W3C, respecting the ‘triple A’ for protocol conformance level easily accessible to the blind.';
                break;
            case 'dr-carlo-graziani-oculoplastico':
                $image = public_path().'/images/carlo-graziani-oculoplastica-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Dr. Carlo Graziani';
                $content = 'For the homepage the slide was realized using the plugin revslider, under it the carousel is a slide of news headings. For the sections of aestethic treatments, functional treatments, images and videos, the admin panel was modified adding the same section to each so they are easier to manage. On the homepage I added a menu that is visible when the mouse is over the image or treatment headings. In this menu there is a list of all treatments.';
                break;
            case 'social-media-expo-2015-milano':
                $image = public_path().'/images/social-media-expo-2015-milano-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Social Media Expo 2015';
                $content = 'I present a support to develop for different platform for Social Media. I create template for Wordpress and Tumblr, I create an ad hoc platform. Also I provide support to the trainees who make their experience at the Milan Triennale. I developed the showcase website using Wordpress and then I created other platform to help users to know everything of Expo2015.';
                break;
            case 'art-bonus':
                $image = public_path().'/images/art-bonus-luig-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Art Bonus';
                $content = 'I developed the website in collaboration with Latte Creative. I realized the site front-end and I used the Bootstrap framework to realize the site pages and for the interventions section I used jQuery library and to load the list of interventions it makes use of ajax be- cause you can filter the results and it is saved in the cookies.';
                break;
            case 'commissario-terzo-valico':
                $image = public_path().'/images/commissario-terzo-valico-luigi-mattia-buffetti-web.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Ceramic Futures';
                $content = 'I developed the website in collaboration with IdLab. The site was developed using Drupal as CMS and was hosted on MIT (Ministero dei Trasporti ed Infrastrutture - Italian Ministry of Infrastructure and Transport) server. I install a module to create the page using a visual editor to make easier to manage the content page. For the page “L’Ambiente” I create a google map with the train lines (dashed if it is a tunnel or solid if it is a normal line) and the data is automatic from italfer REST API.';
                break;
            case 'electio-2014':
                $image = public_path().'/electio-2014-european-parlament-bruxelles-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Electio 2014';
                $content = 'The platform was developed by VoteWatch Europe, an independent organization set up to promote better debates and greater transparency in EU decision-making, by providing easy access to, and analysis of, the votes and other activities of the European Parliament (EP) and the EU Council of Ministers (Council). I realized the template in xhtml, in collaboration with Latte Creative, in compliance with the standards of the W3C, respecting the ‘triple A’ for protocol conformance level easily accessible to the blind.';
                break;
            case 'huball':
                $image = public_path().'/images/huball-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Huball';
                $content = 'The website was developed using Wordpress and I create a custom template using visual composer to make it easier the page update for the client and I modify the functions.php adding the fields to update logo and manage the footer to Customize Appearance. I use Advanced Custom Fields to create the homepage slider and I add the gradient animate to background image.';
                break;
            case 'tpacademy':
                $image = public_path().'/images/tpa-academy-milano-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - TPAcademy';
                $content = 'The website was developed using Wordpress and I create a custom template using visual composer to make it easier the page update for the client and I modify the functions.php adding the fields to update logo and manage the footer to Customize Appearance.';
                break;
            case 'hedronics-webapp':
                $image = public_path().'/images/hedronics-webapp-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Hedronics Webapp';
                $content = 'I developed the website in collaboration with Santa Design Studio. The site was developed using HTML, CSS, JQuery, Ajax and Bootstrap. The data of all sections are retrive with Ajax call to different Son files. We use graph, dataTable, Google maps and Full Calendar to improve the User Experience and make it easier the understanding of all sections.';
                break;
            case 'the-cutting-board-for-amatrice':
                $image = public_path().'/images/the-cutting-board-for-amatrice-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - The Cutting Board For Amatrice';
                $content = 'I developed the site using Wordpress and Woocommerce. The website sell only one product. The website sells only one product because part of the money earned from the sale is donated to Amatrice in order to rebuild it after the August 2016 earthquake. It\'s possible to pay using credit card or paypal account and it is shipped all over the world and the shipping cost is automatic calculate.';
                break;
            case 'santa-agency-app':
                $image = public_path().'/images/santa-agency-app-luigi-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - Santa Agency App';
                $content = 'I developed the app using React Native and the download is free but the data to access it is reserved and only the client can create new client.';
                break;
            case '999-domande-sullo-abitare':
                $image = public_path().'/images/999-domande-sullo-abitare-luig-mattia-buffetti-web-developer.jpg';
                $title = 'Mattia Buffetti - Web Developer - Project - 999 Domande Sull\'Abitare';
                $content = 'I developed the frontend and the backend of site. BACKEND: I developed the backend using PHP and MySql to manage all content of site and I created a Json page to retrive the data dynamically. FRONTEND: I developed the Frontend using React and SCSS. I used webpack to compile project and I integrate Router to get the different pages and to change the url and React Draggable for the windows.';
                break;
        }
        
    }
    ?>
    
    <!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Mattia Buffetti - Web Developer - {{ $title }}</title>
    <link rel="canonical" href="<?=$actual_link;?>" />
    <link rel="icon" href="<?=public_path();?>/images/favicon.ico" />
        
    <meta property="og:url" content="<?=$actual_link;?>" />
    <meta property="og:type" content="website" />
    <meta name="twitter:site" content="<?=$actual_link;?>" />
    <meta name="description" content="<?=$content;?>">
    <meta name="keywords" content="<?=$keywords;?>">
    <meta property="og:title" content="Mattia Buffetti - Web Developer - {{ $title }}">
    <meta property="og:image" content="{{ $image }}" data-react-helmet="true">
    <meta property="og:description" content="{{ $content }}">
    <meta name="twitter:title" content="Mattia Buffetti - Web Developer - {{ $title }}">
    <meta name="twitter:image" content="{{ $image }}">
    <meta name="twitter:description" content="{{ $content }}">
    
    <meta name="google-site-verification" content="Hd7t3CJL5OvuTqDT5sqCGErBB_-qi1Icisq_OxtFF40" />
    <link href="{{mix('css/main.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<div id="root"></div>
<script src="{{mix('js/app.js')}}" ></script>
</body>
</html>