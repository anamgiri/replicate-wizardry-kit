import UserProfile from "@/components/UserProfile";
import LearningPath from "@/components/LearningPath";
import LearningCard from "@/components/LearningCard";

const Index = () => {
  const pythonIntroContent = `
    <p>Python is a versatile and beginner-friendly programming language that has gained immense popularity in both the tech industry and academia. Its simplicity and readability make it an ideal language for beginners to learn programming concepts and develop practical coding skills.</p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Variables and Data Types</h3>
    <p>In Python, variables are used to store data values. Unlike some other programming languages, Python does not require the explicit declaration of variable types. Common data types in Python include:</p>
    <ul class="list-disc pl-6 mb-4">
      <li>Integers: whole numbers without decimal points</li>
      <li>Floats: numbers with decimal points</li>
      <li>Strings: sequences of characters enclosed in quotes</li>
      <li>Booleans: representing either True or False</li>
    </ul>
    <pre class="bg-gray-100 p-2 rounded"><code># Example variable declarations
x = 5
y = 3.14
name = "Alice"
is_student = True</code></pre>

    <h3 class="text-lg font-semibold mt-4 mb-2">Operators</h3>
    <p>Python supports various operators for performing arithmetic, logical, and comparison operations. Some commonly used operators include:</p>
    <ul class="list-disc pl-6 mb-4">
      <li>Arithmetic Operators: +, -, *, /</li>
      <li>Comparison Operators: ==, !=, >, <, >=, <=</li>
      <li>Logical Operators: and, or, not</li>
    </ul>
    <pre class="bg-gray-100 p-2 rounded"><code># Example arithmetic and comparison operations
result = x + y
is_equal = (x == y)
is_greater = (x > y)</code></pre>

    <h3 class="text-lg font-semibold mt-4 mb-2">Control Structures</h3>
    <p>Control structures in Python allow for the execution of specific blocks of code based on conditions or loops. The key control structures in Python are:</p>
    <ul class="list-disc pl-6 mb-4">
      <li>Conditional Statements (if, elif, else)</li>
      <li>Loops (for, while)</li>
    </ul>
    <pre class="bg-gray-100 p-2 rounded"><code># Example conditional statement
if x > y:
    print("x is greater than y")
elif x < y:
    print("x is less than y")
else:
    print("x is equal to y")

# Example for loop
for i in range(5):
    print(i)</code></pre>

    <h3 class="text-lg font-semibold mt-4 mb-2">Functions</h3>
    <p>Functions in Python are reusable blocks of code that perform specific tasks. They help in organizing code and promoting code reusability. Functions in Python are defined using the def keyword.</p>
    <pre class="bg-gray-100 p-2 rounded"><code># Example function definition
def greet(name):
    print("Hello, " + name + "!")

# Function call
greet("Alice")</code></pre>

    <h3 class="text-lg font-semibold mt-4 mb-2">Lists and Dictionaries</h3>
    <p>Lists and dictionaries are two common data structures in Python. Lists are ordered collections of items, while dictionaries are unordered collections of key-value pairs.</p>
    <pre class="bg-gray-100 p-2 rounded"><code># Example list and dictionary
fruits = ["apple", "banana", "cherry"]
person = {"name": "Alice", "age": 30, "is_student": True}</code></pre>
  `;

  const oopContent = `
    <p>Object Oriented Programming (OOP) is a programming paradigm that structures code around objects rather than functions and logic. In Python, OOP allows you to create classes, objects, methods, and attributes to organize and manage code in a more efficient and reusable manner.</p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Classes and Objects</h3>
    <p>In Python, a class serves as a blueprint for creating objects. It defines the structure and behavior of objects through attributes and methods. Once a class is defined, you can create instances of that class, known as objects. Objects are specific instances of a class that can hold data and perform actions as defined in the class.</p>
    
    <pre class="bg-gray-100 p-2 rounded"><code>class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def drive(self):
        print(f"The {self.color} {self.brand} is driving.")
    
my_car = Car("Toyota", "blue")
my_car.drive()</code></pre>

    <p>In the example above, Car is a class with attributes brand and color, and a method drive. my_car is an object created from the Car class, with specific values for brand and color.</p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Inheritance</h3>
    <p>Inheritance is a fundamental concept in OOP that allows classes to inherit attributes and methods from another class. In Python, a class can inherit from one or more parent classes, allowing for code reuse and creating a hierarchy of classes.</p>

    <pre class="bg-gray-100 p-2 rounded"><code>class ElectricCar(Car):
    def __init__(self, brand, color, battery_capacity):
        super().__init__(brand, color)
        self.battery_capacity = battery_capacity
    
    def charge(self):
        print(f"The {self.color} {self.brand} is charging.")
    
my_electric_car = ElectricCar("Tesla", "red", "100 kWh")
my_electric_car.drive()
my_electric_car.charge()</code></pre>

    <h3 class="text-lg font-semibold mt-4 mb-2">Encapsulation</h3>
    <p>Encapsulation is the concept of bundling data (attributes) and methods that operate on the data within a class. It helps in hiding the internal implementation details of a class and only exposing necessary functionalities to the outside world.</p>

    <pre class="bg-gray-100 p-2 rounded"><code>class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    def get_name(self):
        return self._name

    def set_age(self, age):
        if age > 0:
            self._age = age
        else:
            print("Age must be a positive number.")

person = Person("Alice", 30)
print(person.get_name())
person.set_age(-5)</code></pre>

    <h3 class="text-lg font-semibold mt-4 mb-2">Polymorphism</h3>
    <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables flexibility and extensibility in OOP by allowing different classes to implement methods with the same name but different behaviors.</p>

    <pre class="bg-gray-100 p-2 rounded"><code>class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        print("Woof!")

class Cat(Animal):
    def speak(self):
        print("Meow!")

def animal_speak(animal):
    animal.speak()

dog = Dog()
cat = Cat()

animal_speak(dog)
animal_speak(cat)</code></pre>

    <p>Understanding Object Oriented Programming in Python is essential for building robust, maintainable, and scalable applications. By mastering OOP concepts like classes, objects, inheritance, encapsulation, and polymorphism, you can write clean, organized, and efficient code in Python.</p>
  `;

  const dsaContent = `
    <h3 class="text-lg font-semibold mt-4 mb-2">Arrays</h3>
    <p>Arrays are one of the fundamental data structures in Python. An array is a collection of elements, each identified by at least one array index or key. Python offers both lists and tuples as array data structures. Lists are similar to arrays but allow for dynamic resizing, while tuples are immutable arrays.</p>

    <h4 class="text-md font-semibold mt-3 mb-2">Array Operations</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Accessing elements: Elements in an array can be accessed by their indexes.</li>
      <li>Insertion and deletion: Elements can be inserted or deleted from an array, and the array can be resized accordingly.</li>
      <li>Searching: Arrays can be searched for specific elements.</li>
      <li>Sorting: Elements in an array can be sorted using various algorithms.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Linked Lists</h3>
    <p>Linked lists are linear data structures where each element is a separate object (known as a node) that contains a reference to the next node in the sequence. In Python, linked lists are implemented using classes and instances.</p>

    <h4 class="text-md font-semibold mt-3 mb-2">Linked List Operations</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Insertion: Nodes can be inserted at the beginning, end, or middle of a linked list.</li>
      <li>Deletion: Nodes can be removed from a linked list.</li>
      <li>Searching: Linked lists can be traversed to search for a specific element.</li>
      <li>Traversal: The elements of a linked list can be traversed sequentially.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Stacks and Queues</h3>
    <p>Stacks and queues are abstract data types that implement Last In First Out (LIFO) and First In First Out (FIFO) mechanisms, respectively. Stacks can be implemented using lists in Python, while queues can be implemented using deque from the collections module.</p>

    <h4 class="text-md font-semibold mt-3 mb-2">Stack and Queue Operations</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Push and Pop: Elements can be pushed onto a stack or queue and popped from the top.</li>
      <li>Enqueue and Dequeue: Elements can be enqueued into a queue and dequeued from the front.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Trees</h3>
    <p>Trees are hierarchical data structures that consist of nodes connected by edges. Python provides the flexibility to implement various types of trees, such as binary trees, binary search trees, and AVL trees, using classes and recursive functions.</p>

    <h4 class="text-md font-semibold mt-3 mb-2">Tree Operations</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Traversal: Trees can be traversed in different ways, including in-order, pre-order, post-order, and level-order traversal.</li>
      <li>Search: Trees can be searched for specific elements using various algorithms.</li>
      <li>Insertion and Deletion: Nodes can be inserted into or deleted from a tree, maintaining its structure.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Graphs</h3>
    <p>Graphs are non-linear data structures consisting of nodes (vertices) and edges connecting these nodes. In Python, graphs can be implemented using dictionaries or classes representing nodes and edges.</p>

    <h4 class="text-md font-semibold mt-3 mb-2">Graph Operations</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Traversal: Graphs can be traversed using depth-first search (DFS) or breadth-first search (BFS) algorithms.</li>
      <li>Shortest Path: Algorithms like Dijkstra's algorithm and Floyd-Warshall algorithm can be used to find the shortest path between nodes.</li>
      <li>Connectivity: Graph algorithms can determine the connectivity of nodes in a graph.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Sorting and Searching Algorithms</h3>
    <p>Sorting and searching algorithms are essential for processing data efficiently. Python offers various built-in functions and modules for implementing these algorithms, such as sort(), sorted(), bisect module, and itertools module.</p>

    <h4 class="text-md font-semibold mt-3 mb-2">Sorting Algorithms</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Bubble Sort</li>
      <li>Selection Sort</li>
      <li>Insertion Sort</li>
      <li>Merge Sort</li>
      <li>Quick Sort</li>
    </ul>

    <h4 class="text-md font-semibold mt-3 mb-2">Searching Algorithms</h4>
    <ul class="list-disc pl-6 mb-4">
      <li>Linear Search</li>
      <li>Binary Search</li>
      <li>Depth-First Search (DFS)</li>
      <li>Breadth-First Search (BFS)</li>
    </ul>
  `;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <UserProfile />
            <LearningPath />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Available Lessons</h2>
            <div className="space-y-4">
              <LearningCard
                title="Introduction to Python Programming Basics"
                level="Beginner"
                progress={0}
                content={pythonIntroContent}
              />
              <LearningCard
                title="Object-Oriented Programming in Python"
                level="Intermediate"
                progress={0}
                content={oopContent}
              />
              <LearningCard
                title="Data Structures and Algorithms"
                level="Advanced"
                progress={0}
                content={dsaContent}
              />
              <LearningCard
                title="Practical Python Projects"
                level="Advanced"
                progress={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
