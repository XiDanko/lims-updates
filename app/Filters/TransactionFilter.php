<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
