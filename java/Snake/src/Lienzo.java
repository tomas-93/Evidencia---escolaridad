
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.image.BufferStrategy;

/**
 * Created by thomas on 12/04/2015.
 */
public class Lienzo extends Canvas implements KeyListener, Runnable
{
    private IA snake;
    private Snake gam1;
    private Comida comida;
    private boolean controlJuego;
    private Thread proceso;
    public Lienzo()
    {
        this.setBackground(Color.BLACK);
        this.setPreferredSize(new Dimension(500, 500));
        this.addKeyListener(this);
        System.out.println(this.getPreferredSize().getWidth()+" "+ this.getPreferredSize().getHeight());
        this.snake = new IA(500,500);
        this.gam1 = new Snake();
        this.snake.cambiar(10, 10);
        this.gam1.cambiar(30,30);
        
        this.comida = new Comida();
        this.snake.buscarComida(this.comida.getPoint());
        this.controlJuego = true;
        this.proceso = new Thread(this,"Snake");

    }
    @Override
    public void paint(Graphics g)
    {
        Graphics2D g2 = (Graphics2D)g;
        this.snake.setGraphicsSnake(g2);
        this.snake.pintarSnake();
            
        this.gam1.setGraphicsSnake(g2);
        this.gam1.pintarSnake();
        this.comida.setGraphicsComida(g2);
        this.comida.pintarComida();
    }
    public void inicio()
    {
        this.proceso.start();
    }
    @Override
    public void run()
    {
        try
        {
            while(this.controlJuego)
            {
                this.snake.moverSnake();
                this.gam1.moverSnake();
                this.muerte();
                this.colicionBorde();
                this.colicionComida();
                this.repaint();
                this.proceso.sleep(50);
            }
        }catch (Exception e)
        {
            System.out.println(e.getLocalizedMessage());
            e.printStackTrace();
        }
    }
    private void colicionBorde()
    {
        if(this.snake.getCuerpo().get(0).x <= -10)
        {
            this.snake.getCuerpo().get(0).setLocation(490, this.snake.getCuerpo().get(0).y);
        }else if(this.snake.getCuerpo().get(0).x >= 500)
        {
            this.snake.getCuerpo().get(0).setLocation(0, this.snake.getCuerpo().get(0).y);
        }else if(this.snake.getCuerpo().get(0).y <= -10)
        {
            this.snake.getCuerpo().get(0).setLocation(this.snake.getCuerpo().get(0).x, 490);
        }else if(this.snake.getCuerpo().get(0).y >= 500)
        {
            this.snake.getCuerpo().get(0).setLocation(this.snake.getCuerpo().get(0).x, 0);
        }
        if(this.gam1.getCuerpo().get(0).x <= -10)
        {
            this.gam1.getCuerpo().get(0).setLocation(490, this.gam1.getCuerpo().get(0).y);
        }else if(this.gam1.getCuerpo().get(0).x >= 500)
        {
            this.gam1.getCuerpo().get(0).setLocation(0, this.gam1.getCuerpo().get(0).y);
        }else if(this.gam1.getCuerpo().get(0).y <= -10)
        {
            this.gam1.getCuerpo().get(0).setLocation(this.gam1.getCuerpo().get(0).x, 490);
        }else if(this.gam1.getCuerpo().get(0).y >= 500)
        {
            this.gam1.getCuerpo().get(0).setLocation(this.gam1.getCuerpo().get(0).x, 0);
        }
    }
    private void colicionComida()
    {
        if(this.snake.getCuerpo().get(0).equals(this.comida.getPoint()))
        {
            this.snake.crecerSnake();
            this.comida.nuevaComida();
            this.snake.buscarComida(this.comida.getPoint());
        }
        if(this.gam1.getCuerpo().get(0).equals(this.comida.getPoint()))
        {
            this.gam1.crecerSnake();
            this.comida.nuevaComida();
            this.snake.buscarComida(this.comida.getPoint());
            
        }
        if(this.snake.getCuerpo().get(0).equals(this.gam1.getCuerpo().get(this.gam1.getCuerpo().size()-1)))
        {
            this.snake.crecerSnake();
            this.gam1.getCuerpo().remove(this.gam1.getCuerpo().size()-1);
        }
        if(this.gam1.getCuerpo().get(0).equals(this.snake.getCuerpo().get(this.snake.getCuerpo().size()-1)))
        {
            
            this.gam1.crecerSnake();
            this.snake.getCuerpo().remove(this.snake.getCuerpo().size()-1);
        }
        
        
    
    }
    private void muerte()
    {
        for(int n = 0; n < this.snake.getCuerpo().size();n++)
        {
            if(this.gam1.getCuerpo().get(0).equals(this.snake.getCuerpo().get(n)))
            {
                System.exit(0);
            }
        }
    }
    //--------------------------------------- EVENTOS

    @Override
    public void keyTyped(KeyEvent evento)
    {    }
    @Override
    public void keyPressed(KeyEvent evento)
    {
        
        switch(evento.getKeyCode())
        {
            case KeyEvent.VK_UP:
                System.out.println("KeyEvent(): Arrinba");
                this.gam1.dirigirSnake(0,-10);
                break;
            case KeyEvent.VK_DOWN:
                System.out.println("KeyEvent(): Abajo");
                this.gam1.dirigirSnake(0,10);
                break;
            case KeyEvent.VK_LEFT:
                System.out.println("KeyEvent(): Izquirda");
                this.gam1.dirigirSnake(-10,0);
                break;
            case KeyEvent.VK_RIGHT:
                System.out.println("KeyEvent(): Derecha");
                this.gam1.dirigirSnake(10,0);
                break;
        }
    }

    @Override
    public void keyReleased(KeyEvent evento)
    {    }
}
