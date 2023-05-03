<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
