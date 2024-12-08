<?php
$file = 'C:/employee-management/employees.json';
if (file_exists($file)) {
    $employees = json_decode(file_get_contents($file), true);
    echo json_encode($employees);
} else {
    echo json_encode([]);
}
?>
