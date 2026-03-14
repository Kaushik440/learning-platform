export const cheatsheets = [

{
id:1,
title:"HTML Cheat Sheet",
topic:"HTML Structure & Tags",
image:"assets/images/html.png",
content:`

<h3>HTML Page Structure</h3> <div class="code-block"> &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Page Title&lt;/title&gt; &lt;/head&gt; &lt;body&gt; Content Here &lt;/body&gt; &lt;/html&gt; </div> <h3>Text Tags</h3> <div class="code-block"> &lt;h1&gt;Heading&lt;/h1&gt; &lt;p&gt;Paragraph&lt;/p&gt; &lt;b&gt;Bold&lt;/b&gt; &lt;i&gt;Italic&lt;/i&gt; </div> <h3>Links & Images</h3> <div class="code-block"> &lt;a href="https://example.com"&gt;Visit&lt;/a&gt; &lt;img src="image.jpg" alt="image"&gt; </div> <h3>Lists</h3> <div class="code-block"> &lt;ul&gt; &lt;li&gt;Item&lt;/li&gt; &lt;/ul&gt;

<ol>
<li>Item</li>
</ol>

</div> ` },

{
id:2,
title:"CSS Cheat Sheet",
topic:"CSS Properties & Layout",
image:"assets/images/css.png",
content:`

<h3>Basic Syntax</h3> <div class="code-block"> selector { property: value; } </div> <h3>Text Styling</h3> <div class="code-block"> color: red; font-size: 18px; font-weight: bold; text-align: center; </div> <h3>Box Model</h3> <div class="code-block"> margin: 10px; padding: 10px; border: 1px solid black; </div> <h3>Flexbox</h3> <div class="code-block"> display: flex; justify-content: center; align-items: center; </div> ` },

{
id:3,
title:"JavaScript Cheat Sheet",
topic:"JavaScript Basics",
image:"assets/images/js.png",
content:`

<h3>Variables</h3> <div class="code-block"> let name = "John"; const age = 20; var city = "Delhi"; </div> <h3>Functions</h3> <div class="code-block"> function greet(name){ return "Hello " + name; } </div> <h3>Arrow Functions</h3> <div class="code-block"> const add = (a,b) => a + b; </div> <h3>DOM Example</h3> <div class="code-block"> document.getElementById("demo").innerHTML="Hello"; </div> ` },

{
id:4,
title:"C++ Cheat Sheet",
topic:"C++ Programming Basics",
image:"assets/images/cpp.png",
content:`

<h3>Hello World</h3> <div class="code-block"> #include &lt;iostream&gt; using namespace std;

int main(){
cout << "Hello World";
return 0;
}

</div> <h3>If Condition</h3> <div class="code-block"> if(a > b){ cout << "A is greater"; } </div> <h3>Loop</h3> <div class="code-block"> for(int i=0;i<5;i++){ cout << i; } </div> ` },

{
id:5,
title:"Java Cheat Sheet",
topic:"Java Programming Basics",
image:"assets/images/java.png",
content:`

<h3>Hello World</h3> <div class="code-block"> public class Main{ public static void main(String[] args){ System.out.println("Hello World"); } } </div> <h3>Variables</h3> <div class="code-block"> int age = 20; String name = "John"; </div> <h3>Loop</h3> <div class="code-block"> for(int i=0;i<5;i++){ System.out.println(i); } </div> ` },

{
id:6,
title:"PHP Cheat Sheet",
topic:"PHP Server Side Basics",
image:"assets/images/php.png",
content:`

<h3>PHP Syntax</h3> <div class="code-block"> &lt;?php echo "Hello World"; ?&gt; </div> <h3>Variables</h3> <div class="code-block"> &lt;?php $name = "John"; $age = 25; ?&gt; </div> <h3>If Statement</h3> <div class="code-block"> &lt;?php if($age > 18){ echo "Adult"; } ?&gt; </div> ` },

{
id:7,
title:"Python Cheat Sheet",
topic:"Python Basics",
image:"assets/images/python.png",
content:`

<h3>Hello World</h3> <div class="code-block"> print("Hello World") </div> <h3>Variables</h3> <div class="code-block"> name = "John" age = 20 </div> <h3>Loop</h3> <div class="code-block"> for i in range(5): print(i) </div> ` },

{
id:8,
title:"SQL Cheat Sheet",
topic:"Database Queries",
image:"assets/images/sql.png",
content:`

<h3>Select Query</h3> <div class="code-block"> SELECT * FROM users; </div> <h3>Insert Query</h3> <div class="code-block"> INSERT INTO users(name,age) VALUES('John',25); </div> <h3>Update Query</h3> <div class="code-block"> UPDATE users SET age=30 WHERE name='John'; </div> ` },

{
id:9,
title:"Git Cheat Sheet",
topic:"Version Control Commands",
image:"assets/images/git.png",
content:`

<h3>Initialize Repository</h3> <div class="code-block"> git init </div> <h3>Add Files</h3> <div class="code-block"> git add . </div> <h3>Commit</h3> <div class="code-block"> git commit -m "first commit" </div> <h3>Push</h3> <div class="code-block"> git push origin main </div> ` }

];