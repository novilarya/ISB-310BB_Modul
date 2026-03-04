<?php
session_start();

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$remember = isset($_POST['remember']);

$valid_username = 'novila';
$valid_password = 'novila123';

if ($username === $valid_username && $password === $valid_password) {
    $_SESSION['user'] = $username;
    if ($remember) {
        setcookie('username', $username, time() + 3600, '/');
    } else {
        if (isset($_COOKIE['username'])) {
            setcookie('username', '', time() + 3600, '/');
        }
    }
    header('Location: ../index.php');
    exit();
} else {
    header('Location: ../login.php?error=1');
    exit();
}
?>

