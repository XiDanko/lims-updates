<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
