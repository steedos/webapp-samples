import { SteedosClient } from '@steedos/client';

const STEEDOS_API_SERVER="http://127.0.0.1:5000"

const client = new SteedosClient();
client.setUrl(STEEDOS_API_SERVER)
window.SteedosClient = client;

export async function signIn(email, password) {
  try {
    // Send request
    console.log(email, password);

    let data = await client.login(email, password);
    
    localStorage.setItem('steedos:userId', data.user._id)
    localStorage.setItem('steedos:token', data.token)
    return {
      isOk: true,
      data: data.user
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request
    const token = localStorage.getItem('steedos:token');
    debugger
    if (token)
    {
      client.setToken(token);
      const user = await client.getMe();
      debugger
      return {
        isOk: true,
        data: user
      };
    }

  }
  catch (e){
    console.log(e)
  }
  return {
    isOk: false
  };
}

export async function createAccount(email, password) {
  try {
    // Send request
    console.log(email, password);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
