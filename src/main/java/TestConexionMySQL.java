
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestConexionMySQL {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3307/frennessidepizzas?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true";
        String user = "root";
        String password = "otra_contraseña";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("✅ Conexión exitosa a MySQL");
        } catch (SQLException e) {
            System.out.println("❌ Error de conexión: " + e.getMessage());
        }
    }
}
