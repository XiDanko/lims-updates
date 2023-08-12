<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
