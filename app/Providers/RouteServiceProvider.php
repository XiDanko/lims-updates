<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
