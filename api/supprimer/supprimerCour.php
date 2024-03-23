<?php

function supprimerCour($courId) {
    try {
        global $connect;

        $req = "DELETE from client where courId=:y";
        $stmt = $connect->prepare($req);
        $stmt->bindParam(":y", $courId);
        $resultat = $stmt->execute();
        echo $stmt->rowCount();

        if($resultat == 0) {
            http_response_code(400);
            $msg = ["erreur" => "client non existant"];
            echo json_encode($msg);
        }
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>