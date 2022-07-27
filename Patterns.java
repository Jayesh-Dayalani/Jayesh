import java.util.*;

public class Patterns{
    public void solidRectangle(){
        System.out.println("Solid Rectangle :- ");
        for(int i=1; i<5; i++){             //rows
            for(int j=1; j<6; j++){         //columns
                System.out.print(" * ");
            }
            System.out.println(" ");
        }
        System.out.println("____________________");
    }

    

    public void hollowRectangle(){
        System.out.println("Hollow Reactangle :- ");
        int r=4, c=5;
        for(int i=1; i<=r; i++){
            for(int j=1; j<=c; j++){
                
                    if( i==1 || j==1 || i==r || j==c){

                        System.out.print(" * ");
                    }
                else {
                    System.out.print("   ");
                }
        }
        System.out.println();
        }
        System.out.println("___________________");

    }

    public void leftTriangle(){
        System.out.println("Left Triangle :- ");
        int r=4, c=4;
        for(int i=1; i<=r; i++){
            for(int j=1; j<=c; j++){
                if(j<=i)
                    System.out.print(" * ");
                else
                    System.out.print("   ");
            }
            System.out.println();
        }
        System.out.println("____________________");
    }

    public static void main(String[] args){
        Patterns p = new Patterns();
        p.solidRectangle();
        p.hollowRectangle();
        p.leftTriangle();
    }
}