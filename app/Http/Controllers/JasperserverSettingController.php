<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
