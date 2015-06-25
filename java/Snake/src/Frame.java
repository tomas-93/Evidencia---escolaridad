
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
/**
 * Created by thomas on 12/04/2015.
 */
public class Frame extends JFrame implements ActionListener
{
    private JButton bt;
    private Lienzo lienzo;
    private boolean bandera;
    private boolean juegoInicio;
    public Frame()
    {
        super("snake");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(520,610);
        this.setResizable(false);
        this.setLayout(new FlowLayout());
        this.setLocationRelativeTo(null);

        this.panel();
        this.canvas();
        this.setVisible(true);



        this.bandera = true;
        this.juegoInicio = false;
    }
    private void panel()
    {
        JPanel panel = new JPanel(new FlowLayout(5));
        panel.setPreferredSize(new Dimension(500,30));
        this.bt = new JButton("Inicio");
        this.bt.addActionListener(this);
        panel.add(this.bt);
        this.add(panel);
    }
    private void canvas()
    {
        this.lienzo = new Lienzo();
        this.add(lienzo);
    }
//-----------------------------Eventos
    @Override
    public void actionPerformed(ActionEvent evento)
    {
          this.lienzo.inicio();
    }
//--------------------------------MAIN
    public static void main(String [] x)
    {
        new Frame();
    }

}
