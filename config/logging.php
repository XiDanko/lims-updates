<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
