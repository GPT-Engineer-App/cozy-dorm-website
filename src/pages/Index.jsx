import { useState } from "react";
import { Container, VStack, Text, Button, Input, FormControl, FormLabel, Box, HStack, IconButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaUser, FaSignOutAlt, FaList, FaCog, FaHome, FaBed, FaUsers } from "react-icons/fa";

const mockData = {
  students: [
    { id: 1, name: "John Doe", room: "101" },
    { id: 2, name: "Jane Smith", room: "102" },
  ],
  dorms: [
    { id: 1, name: "Dorm A" },
    { id: 2, name: "Dorm B" },
  ],
  rooms: [
    { id: 1, number: "101", dorm: "Dorm A" },
    { id: 2, number: "102", dorm: "Dorm B" },
  ],
  users: [
    { id: 1, username: "admin", role: "Admin" },
    { id: 2, username: "student1", role: "Student" },
  ],
};

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("home");

  const handleLogin = () => {
    // Mock login logic
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const renderLogin = () => (
    <Container centerContent>
      <VStack spacing={4}>
        <Text fontSize="2xl">Dormitory Login</Text>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Container>
  );

  const renderHome = () => (
    <Box>
      <Text fontSize="2xl">Welcome to the Dormitory Management System</Text>
    </Box>
  );

  const renderStudents = () => (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Room</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.students.map((student) => (
          <Tr key={student.id}>
            <Td>{student.id}</Td>
            <Td>{student.name}</Td>
            <Td>{student.room}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const renderDorms = () => (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.dorms.map((dorm) => (
          <Tr key={dorm.id}>
            <Td>{dorm.id}</Td>
            <Td>{dorm.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const renderRooms = () => (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Number</Th>
          <Th>Dorm</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.rooms.map((room) => (
          <Tr key={room.id}>
            <Td>{room.id}</Td>
            <Td>{room.number}</Td>
            <Td>{room.dorm}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const renderUsers = () => (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Username</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.username}</Td>
            <Td>{user.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const renderSettings = () => (
    <Box>
      <Text fontSize="2xl">Settings</Text>
      <Text>Here you can configure your settings.</Text>
    </Box>
  );

  const renderContent = () => {
    switch (view) {
      case "students":
        return renderStudents();
      case "dorms":
        return renderDorms();
      case "rooms":
        return renderRooms();
      case "users":
        return renderUsers();
      case "settings":
        return renderSettings();
      default:
        return renderHome();
    }
  };

  if (!isLoggedIn) {
    return renderLogin();
  }

  return (
    <Container maxW="container.xl">
      <HStack spacing={4} mb={4}>
        <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setView("home")} />
        <IconButton aria-label="Students" icon={<FaUsers />} onClick={() => setView("students")} />
        <IconButton aria-label="Dorms" icon={<FaBed />} onClick={() => setView("dorms")} />
        <IconButton aria-label="Rooms" icon={<FaList />} onClick={() => setView("rooms")} />
        <IconButton aria-label="Users" icon={<FaUser />} onClick={() => setView("users")} />
        <IconButton aria-label="Settings" icon={<FaCog />} onClick={() => setView("settings")} />
        <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={handleLogout} />
      </HStack>
      {renderContent()}
    </Container>
  );
};

export default Index;
