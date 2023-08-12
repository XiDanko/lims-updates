<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
