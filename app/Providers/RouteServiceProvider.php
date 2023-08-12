<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
