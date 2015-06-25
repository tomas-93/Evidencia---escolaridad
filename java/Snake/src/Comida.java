
import java.awt.*;
import java.util.Random;

/**
 * Created by thomas on 12/04/2015.
 */
public class Comida
{
    private Point comida;
    private Graphics2D dibujar;
    private Random n;
    private int x;
    private int y;

    public Comida()
    {
        this.n = new Random();
        this.comida = new Point();
        this.nuevaComida();
    }
    public void setGraphicsComida(Graphics2D g)
    {
        this.dibujar = g;
    }
    public void pintarComida()
    {
        this.dibujar.setColor(Color.RED);
        this.dibujar.fillOval(comida.x,comida.y,10,10);
    }
    public void nuevaComida()
    {
        int aux = n.nextInt(5)*100;
        int aux2 = (n.nextInt(9)*10)+aux;
        this.comida.x = aux2;
        this.comida.y = aux2+10;
    }
    public Point getPoint()
    {
        return this.comida;
    }
}