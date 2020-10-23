<?
header('Content-type: text/html; charset=utf-8');
class Person{
  private $name;
  private $lastname;
  private $age;
  private $mother;
  private $father;
  function __construct($name,$lastname,$age,$mother=null,$father=null){
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
  }
  public function getName(){return $this->name;}
	public function getLastname(){return $this->lastname;}
	public function getAge(){return $this->age;}
	public function getMother(){return $this->mother;}
	public function getFather(){return $this->father;}
	public function getInfo(){
	  return "
	    Меня зовут: ".$this->name."<br>
	    Мою маму зовут: ".$this->getMother()->getName()."<br>
	    Моего папу зовут: ".$this->getFather()->getName()."<br>
	    Моего дедушку по папиной линии зовут: ".$this->getFather()->getFather()->getName()."<br>
	    Моего дедушку по маминой линии зовут: ".$this->getMother()->getFather()->getName()."<br>
	    Мою бабушку по папиной линии зовут: ".$this->getFather()->getMother()->getName()."<br>
	    Мою бабушку по маминой линии зовут: ".$this->getMother()->getMother()->getName();
	   }
}
$grandmother1 = new Person("Ирина","Петрова",73);
$grandfather1 = new Person("Иван","Петров",75);
$grandmother2 = new Person("Ангелина","Иванова",63);
$grandfather2 = new Person("Андрей","Иванов",65);
$oleg = new Person("Олег","Петров",41,$grandmother1,$grandfather1);
$olga = new Person("Ольга","Петрова",41,$grandmother2,$grandfather2);
$igor = new Person("Игорь","Петров",12,$olga,$oleg,$grandfather1,$grandmother1,$grandfather2,$grandmother2);
echo $igor->getInfo();
?>