<?php
$data = file_get_contents('php://input');
$employee = json_decode($data, true);
$file = 'C:/employee-management/employees.json';
if (file_exists($file)) {
    $employees = json_decode(file_get_contents($file), true);
} else {
    $employees = [];
}
$employees[] = $employee;
file_put_contents($file, json_encode($employees, JSON_PRETTY_PRINT));
echo json_encode(['status' => 'success']);
?>
