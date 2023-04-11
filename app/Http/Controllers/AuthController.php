<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
