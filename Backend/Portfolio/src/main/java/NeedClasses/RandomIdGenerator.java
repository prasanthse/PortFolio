package NeedClasses;

public class RandomIdGenerator {

    private static final String values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private int idLength = 15;
    StringBuilder stringBuilder = new StringBuilder();

    public String generateId(){

        int index;

        while (idLength != 0){
            index = (int) (Math.random() * values.length());
            stringBuilder.append(values.charAt(index));
            idLength -= 1;
        }
        return stringBuilder.toString();
    }
}
