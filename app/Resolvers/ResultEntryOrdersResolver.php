<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
