<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
