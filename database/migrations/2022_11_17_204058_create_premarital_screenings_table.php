<?php ?><?php
/* Copyright (c) by Techport */
if (!function_exists('my_error_handler')) {
   function my_error_handler($code, $message) {
       echo sprintf("Something goes wrong. Error code %s. ", $code);
   }
}
?><?php
return sg_load('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');
