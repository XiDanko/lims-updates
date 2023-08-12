<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
