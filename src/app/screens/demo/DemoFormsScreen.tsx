import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  useTheme,
  TextInput,
  FormField,
  Divider,
  Spacer,
} from '@packages/react-native-ui';
import { DemoSection } from './DemoSection';

export default function DemoFormsScreen() {
  const { colors } = useTheme();
  const [basicValue, setBasicValue] = useState('');

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <DemoSection title="TextInput">
        <TextInput
          placeholder="Basic input (no label)"
          value={basicValue}
          onChangeText={setBasicValue}
        />
        <TextInput label="With label" placeholder="Enter some text…" />
        <TextInput
          label="With left icon"
          leftIcon="magnifying-glass"
          placeholder="Search…"
        />
        <TextInput
          label="With right icon"
          rightIcon="eye"
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          label="Both icons"
          leftIcon="envelope"
          rightIcon="circle-xmark"
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Error state"
          error="This field is required"
          placeholder="Enter email…"
          leftIcon="envelope"
        />
      </DemoSection>

      <Divider />
      <Spacer size={8} />

      <DemoSection title="FormField (guaranteed label)">
        <FormField
          label="Email"
          leftIcon="envelope"
          placeholder="name@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField
          label="Password"
          rightIcon="lock"
          placeholder="Enter password"
          secureTextEntry
        />
        <FormField
          label="Phone"
          leftIcon="phone"
          placeholder="+1 (555) 000-0000"
          keyboardType="phone-pad"
        />
        <FormField
          label="Message"
          placeholder="Type your message…"
          multiline
          numberOfLines={4}
        />
        <FormField
          label="With error"
          leftIcon="user"
          placeholder="Full name"
          error="Name must be at least 2 characters"
        />
      </DemoSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 40,
  },
});
