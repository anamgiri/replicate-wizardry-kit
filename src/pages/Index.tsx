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
              />
              <LearningCard
                title="Data Structures and Algorithms"
                level="Advanced"
                progress={0}
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