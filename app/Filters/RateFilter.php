<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
