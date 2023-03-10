/**
 *
 * # 集合(Set)
 *
 * 由一堆无序的、相关联且不重复的内存结构[数学中称之为元素]组合而成的组合。
 *
 * # 字典(Map)
 *
 * 是一些元素的集合。每个元素由一个称作 key 的域，不同元素的 key 各不相同。
 *
 * # Different?
 *
 * - 共同点：
 * - - 集合、字典都可以存储不重复的值；
 * - - 集合、字典查找速度都非常快，时间复杂度为O(1)；数组查找的时间复杂度为O(n)。
 *
 * - 不同点：
 * - - 集合是无序的元素组合，字典是有序的元素组合；
 * - - 集合以 值-值 形式存储元素，字典以 键-值 形式存储元素；
 * - - 集合对象初始化的值为一维数组，字典对象初始化的值为二维数组；
 * - - 集合对象只能通过迭代器来修改值，字典的键不能改，但是值能改。
 *
 * # Thinking.
 *
 * - 为什么 Set 和 Map 的插入删除效率很高呢？
 * 因为它们存储的所有元素都是以节点的方式来进行存储的。
 * 这种节点结构和链表有些类似，两个节点通过指针相连。
 * 所以新增或删除元素时，只是修改了指针的指向。
 * 与数组不同，插入或删除之后需要重新排序。
 *
 */
