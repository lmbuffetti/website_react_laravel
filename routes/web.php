<?php
    
    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */
    
    Route::get('/', function () {
        return view(
            'welcome', 
            [
                'title'=>'Home', 
                'content' => 'I\'m a Web Developer, I worked in Italy, Berlin and Lisbon. I\'m a fullstack developer, I know PHP, MySql and Laravel, and Javascript, React, React Native, HTML and CSS.',
                'image' => public_path() .'images/social_graph.jpg',
                'keywords' => 'Web Developer'
            ]
        );
    });
    Route::any('/about', function () {
        return view(
            'welcome',
            [
                'title'=>'About',
                'content' => 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax. I studied React and React Native as Javascript Library/Framework and for PHP I know Laravel.',
                'image' => public_path() .'images/social_graph.jpg',
                'keywords' => 'Web Developer'
            ]
        );
    });
    Route::any('/about/skills', function () {
        return view(
            'welcome',
            [
                'title'=>'About - Skills',
                'content' => 'I know HTML/HTML5, CSS/CSS3, SCSS/LESS, Javascript, JQuery, Ajax, Rest API, React/React Native, PHP, MySql, Laravel, GIT/Bitbucket, Jira, Trello, Photoshop, Illustrator, InDesign, Sketch, Mockflow, Marvelapp',
                'image' => public_path() .'images/social_graph.jpg',
                'keywords' => 'Web Developer'
            ]
        );
    });
    Route::any('/about/experience', function () {
        return view(
            'welcome',
            [
                'title'=>'About - Experience',
                'content' => 'I worked in Italy and I collaborate with different companies, as Latte Creative or IdLab, and I developed ArtBonus website, Commissario Terzo Valico and Social Media Expo 2015 of Milan and at the moment I live in Berlin and I work for an English Company, Octopus Investments',
                'image' => public_path() .'images/social_graph.jpg',
                'keywords' => 'Web Developer'
            ]
        );
    });
    Route::any('/contact', function () {
        return view(
            'welcome',
            [
                'title'=>'Contact',
                'content' => 'Mail: mattia.buffetti@gmail.com, Skype: mattia.buffetti, Mobile: +39 328.6930881',
                'image' => public_path() .'images/social_graph.jpg',
                'keywords' => 'Web Developer'
            ]
        );
    });
    Route::any('/project', function () {
        return File::get(public_path() . '/json/project.json');
    });
    
    Route::any('/projects/{id}', function ($id) {
        return view(
            'welcome',
            [
                'title'=>'Project',
                'content' => $id,
                'image' => public_path() .'images/social_graph.jpg',
                'keywords' => 'Web Developer'
            ]
        );
    });
    Route::any('/projects/{id}/tasks', function () {
        return view('welcome', ['title'=>'Login']);
    });
    Route::any('/projects/{id}/skills', function () {
        return view('welcome', ['title'=>'Login']);
    });
    