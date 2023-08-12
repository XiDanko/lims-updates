<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
