<?php
	$test = "consoike:";
	echo "cpnsike";

	/**
	 * @phan-assert Console $consike
	 * @param name(String) string === "throw"
	 */

	 function print_name(string $name)
	 {
		echo $name;
		return $name;
	 }

	 print_name("Peter");

	 {
		 echo "`text`";
		 echo `Test {$name}`;
	 }

	//! * @param String const Test
?>