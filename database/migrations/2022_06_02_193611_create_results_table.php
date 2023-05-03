<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
