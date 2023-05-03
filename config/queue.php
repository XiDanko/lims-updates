<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
