<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
