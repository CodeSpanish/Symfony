<?php
/**
 * Created by PhpStorm.
 * User: Pablo
 * Date: 27/05/14
 * Time: 6:22 AM
 */

namespace Blogger\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PageController extends Controller
{
    public function IndexAction()
    {
        return $this->render('BloggerBlogBundle:Page:index.html.twig');
    }
} 